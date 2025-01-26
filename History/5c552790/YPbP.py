import pygame
import chess
import csv
import logging
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class ChessPuzzleVisualizer:
    def __init__(self, window_size=600):
        """Initialize the chess puzzle visualizer."""
        pygame.init()
        
        self.window_size = window_size
        self.square_size = window_size // 8
        self.screen = pygame.display.set_mode((window_size, window_size))
        pygame.display.set_caption("Chess Puzzle Visualizer")
        
        # Initialize piece images cache
        self.piece_images = {}
        self.load_piece_images()
        
        # Faster animation settings
        self.animation_speed = 15  # Reduced from 30 to 15 frames per move
        self.clock = pygame.time.Clock()
        self.FPS = 120  # Increased from 60 to 120 for smoother animations

    def load_piece_images(self):
        """Load chess piece images from PNG files."""
        piece_files = {
            'P': 'wP.png', 'N': 'wN.png', 'B': 'wB.png', 'R': 'wR.png', 'Q': 'wQ.png', 'K': 'wK.png',
            'p': 'bP.png', 'n': 'bN.png', 'b': 'bB.png', 'r': 'bR.png', 'q': 'bQ.png', 'k': 'bK.png'
        }
        pieces_dir = Path("chess_pieces")
        
        for piece_symbol, filename in piece_files.items():
            file_path = pieces_dir / filename
            if file_path.exists():
                try:
                    original_image = pygame.image.load(str(file_path)).convert_alpha()
                    self.piece_images[piece_symbol] = pygame.transform.smoothscale(
                        original_image,
                        (self.square_size, self.square_size)
                    )
                except Exception as e:
                    logger.error(f"Error loading piece image {filename}: {e}")

    def draw_board(self):
        """Draw the chess board squares."""
        for rank in range(8):
            for file in range(8):
                color = (240, 217, 181) if (rank + file) % 2 == 0 else (181, 136, 99)
                pygame.draw.rect(
                    self.screen,
                    color,
                    (file * self.square_size, rank * self.square_size, self.square_size, self.square_size)
                )

    def draw_position(self, board):
        """Draw chess pieces on the board."""
        self.draw_board()
        for rank in range(8):
            for file in range(8):
                piece = board.piece_at(chess.square(file, 7-rank))
                if piece:
                    self.screen.blit(
                        self.piece_images[piece.symbol()],
                        (file * self.square_size, rank * self.square_size)
                    )

    def animate_move(self, board, move):
        """Animate a chess piece moving from one square to another."""
        from_file = chess.square_file(move.from_square)
        from_rank = 7 - chess.square_rank(move.from_square)
        to_file = chess.square_file(move.to_square)
        to_rank = 7 - chess.square_rank(move.to_square)
        
        start_pos = (from_file * self.square_size, from_rank * self.square_size)
        end_pos = (to_file * self.square_size, to_rank * self.square_size)
        
        piece = board.piece_at(move.from_square)
        piece_img = self.piece_images[piece.symbol()]
        temp_board = board.copy()
        
        # Faster easing function
        def ease_out_cubic(t):
            return 1 - pow(1 - t, 3)
        
        for frame in range(self.animation_speed + 1):
            progress = ease_out_cubic(frame / self.animation_speed)
            current_pos = (
                start_pos[0] + (end_pos[0] - start_pos[0]) * progress,
                start_pos[1] + (end_pos[1] - start_pos[1]) * progress
            )
            
            temp_board.remove_piece_at(move.from_square)
            self.draw_position(temp_board)
            self.screen.blit(piece_img, current_pos)
            pygame.display.flip()
            self.clock.tick(self.FPS)
            
            temp_board = board.copy()
        
        board.push(move)

    def visualize_puzzle(self, fen, moves_str, delay=0.3):  # Reduced delay from 1.0 to 0.3
        """Visualize a chess puzzle with animations, skipping the first move."""
        board = chess.Board(fen)
        moves = [chess.Move.from_uci(move) for move in moves_str.split()]
        
        # Skip the first move (opponent's mistake) and start with the solution
        if moves:
            board.push(moves[0])  # Apply first move without visualization
            solution_moves = moves[1:]  # Get only the solution moves
            
            # Show initial position
            self.draw_position(board)
            pygame.display.flip()
            pygame.time.wait(int(delay * 500))  # Reduced waiting time
            
            # Animate solution moves
            for move in solution_moves:
                self.animate_move(board, move)
                pygame.time.wait(int(delay * 500))  # Reduced waiting time

    def close(self):
        """Clean up pygame resources."""
        pygame.quit()

def visualize_all_puzzles(csv_file, window_size=600, delay=0.3):
    """Visualize all puzzles in the CSV file."""
    try:
        visualizer = ChessPuzzleVisualizer(window_size)
        
        with open(csv_file, 'r') as f:
            reader = csv.DictReader(f)
            
            for row in reader:
                fen, moves = row['FEN'], row['Moves']
                visualizer.visualize_puzzle(fen, moves, delay)
                
                # Check for quit event
                for event in pygame.event.get():
                    if event.type == pygame.QUIT:
                        visualizer.close()
                        return
                    elif event.type == pygame.KEYDOWN:
                        if event.key == pygame.K_SPACE:  # Skip to next puzzle
                            break
        
        visualizer.close()
        
    except Exception as e:
        logger.error(f"Error visualizing puzzles: {e}")
        raise

if __name__ == "__main__":
    csv_file = r"C:\Users\Rip\Desktop\Code\chesspuzzles\puzzle_filterer\bankrank.csv"
    visualize_all_puzzles(csv_file)
