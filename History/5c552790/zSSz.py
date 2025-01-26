import pygame
import chess
import os
import csv
import logging
import time
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
        logger.info("Initializing Chess Puzzle Visualizer")
        pygame.init()
        
        # Enable anti-aliasing for better rendering
        pygame.display.gl_set_attribute(pygame.GL_MULTISAMPLEBUFFERS, 1)
        pygame.display.gl_set_attribute(pygame.GL_MULTISAMPLESAMPLES, 4)
        
        self.window_size = window_size
        self.square_size = window_size // 8
        self.screen = pygame.display.set_mode((window_size, window_size), pygame.HWSURFACE | pygame.DOUBLEBUF)
        pygame.display.set_caption("Chess Puzzle Visualizer")
        
        # Initialize piece images cache
        self.piece_images = {}
        self.load_piece_images()
        
        # Animation settings
        self.animation_speed = 15  # Frames per move
        self.clock = pygame.time.Clock()
        self.FPS = 60

    def load_piece_images(self):
        """Load chess piece images from PNG files with high-quality scaling."""
        logger.info("Loading piece images from PNG files")
        
        # Mapping between piece symbols and filenames
        piece_files = {
            'P': 'wP.png', 'N': 'wN.png', 'B': 'wB.png', 'R': 'wR.png', 'Q': 'wQ.png', 'K': 'wK.png',
            'p': 'bP.png', 'n': 'bN.png', 'b': 'bB.png', 'r': 'bR.png', 'q': 'bQ.png', 'k': 'bK.png'
        }
        pieces_dir = Path("chess_pieces")
        
        # Calculate a slightly larger initial size for better downscaling
        target_size = int(self.square_size * 1.2)  # 20% larger than final size
        
        for piece_symbol, filename in piece_files.items():
            file_path = pieces_dir / filename
            if file_path.exists():
                try:
                    # Load the image at full resolution
                    original_image = pygame.image.load(str(file_path))
                    
                    # Convert image to include alpha channel
                    original_image = original_image.convert_alpha()
                    
                    # First scale to a larger size using smooth scale
                    intermediate = pygame.transform.smoothscale(
                        original_image,
                        (target_size, target_size)
                    )
                    
                    # Then scale down to final size for better quality
                    final_image = pygame.transform.smoothscale(
                        intermediate,
                        (self.square_size, self.square_size)
                    )
                    
                    self.piece_images[piece_symbol] = final_image
                    logger.info(f"Loaded and scaled piece image: {filename}")
                except Exception as e:
                    logger.error(f"Error loading piece image {filename}: {e}")
            else:
                logger.error(f"Piece image file not found: {file_path}")

    def draw_board(self):
        """Draw the chess board squares with anti-aliased edges."""
        for rank in range(8):
            for file in range(8):
                color = (240, 217, 181) if (rank + file) % 2 == 0 else (181, 136, 99)
                rect = pygame.Rect(
                    file * self.square_size, 
                    rank * self.square_size, 
                    self.square_size, 
                    self.square_size
                )
                pygame.draw.rect(self.screen, color, rect)

    def draw_position(self, board):
        """Draw chess pieces on the board with alpha blending."""
        self.draw_board()
        for rank in range(8):
            for file in range(8):
                square = chess.square(file, 7-rank)
                piece = board.piece_at(square)
                if piece:
                    piece_img = self.piece_images[piece.symbol()]
                    # Use alpha blending for smoother edges
                    self.screen.blit(
                        piece_img,
                        (file * self.square_size, rank * self.square_size)
                    )

    def animate_move(self, board, move):
        """Animate a chess piece moving from one square to another with smooth movement."""
        logger.info(f"Animating move: {move}")
        
        from_file = chess.square_file(move.from_square)
        from_rank = 7 - chess.square_rank(move.from_square)
        to_file = chess.square_file(move.to_square)
        to_rank = 7 - chess.square_rank(move.to_square)
        
        start_pos = (from_file * self.square_size, from_rank * self.square_size)
        end_pos = (to_file * self.square_size, to_rank * self.square_size)
        
        # Get the moving piece
        piece = board.piece_at(move.from_square)
        piece_img = self.piece_images[piece.symbol()]
        
        # Check if this is a capture move
        captured_piece = board.piece_at(move.to_square)
        is_capture = captured_piece is not None
        
        # Create a temporary board state for animation
        temp_board = board.copy()
        
        # Use smooth easing function for animation
        def ease_out_quad(t):
            return t * (2 - t)
        
        for frame in range(self.animation_speed + 1):
            progress = ease_out_quad(frame / self.animation_speed)
            current_pos = (
                start_pos[0] + (end_pos[0] - start_pos[0]) * progress,
                start_pos[1] + (end_pos[1] - start_pos[1]) * progress
            )
            
            # If it's a capture and we're more than halfway through the animation,
            # remove the captured piece from the temporary board
            if is_capture and progress > 0.5:
                temp_board.remove_piece_at(move.to_square)
            
            # Clear the starting square on the temporary board
            temp_board.remove_piece_at(move.from_square)
            
            # Draw the current board state
            self.draw_position(temp_board)
            
            # Draw the moving piece at its current position
            self.screen.blit(piece_img, current_pos)
            
            pygame.display.flip()
            self.clock.tick(self.FPS)
            
            # Reset the temporary board for the next frame
            temp_board = board.copy()
        
        # Make the move on the actual board after animation completes
        board.push(move)

    def visualize_puzzle(self, fen, moves_str, delay=1.0):
        """Visualize a chess puzzle with animations."""
        logger.info(f"Visualizing puzzle from position: {fen}")
        
        board = chess.Board(fen)
        moves = [chess.Move.from_uci(move) for move in moves_str.split()]
        
        # Show initial position
        self.draw_position(board)
        pygame.display.flip()
        time.sleep(delay)
        
        # Animate each move
        for i, move in enumerate(moves, 1):
            logger.info(f"Move {i}/{len(moves)}")
            self.animate_move(board, move)
            time.sleep(delay)
        
        # Show final position
        self.draw_position(board)
        pygame.display.flip()
        time.sleep(delay)

    def close(self):
        """Clean up pygame resources."""
        pygame.quit()

def load_puzzle_from_csv(csv_file, puzzle_id):
    """Load a specific puzzle from the CSV file."""
    logger.info(f"Loading puzzle {puzzle_id} from {csv_file}")
    
    with open(csv_file, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row['PuzzleId'] == puzzle_id:
                return row['FEN'], row['Moves']
    
    raise ValueError(f"Puzzle {puzzle_id} not found in {csv_file}")

def visualize_puzzle_from_csv(csv_file, puzzle_id, window_size=600, delay=1.0):
    """Visualize a puzzle from the CSV file."""
    try:
        fen, moves = load_puzzle_from_csv(csv_file, puzzle_id)
        visualizer = ChessPuzzleVisualizer(window_size)
        visualizer.visualize_puzzle(fen, moves, delay)
        
        # Keep the window open until closed by user
        running = True
        while running:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    running = False
        
        visualizer.close()
        
    except Exception as e:
        logger.error(f"Error visualizing puzzle: {e}")
        raise

def visualize_all_puzzles(csv_file, window_size=600, delay=1.0):
    """Visualize all puzzles in the CSV file."""
    try:
        visualizer = ChessPuzzleVisualizer(window_size)
        
        with open(csv_file, 'r') as f:
            reader = csv.DictReader(f)
            
            for i, row in enumerate(reader):
                fen, moves = row['FEN'], row['Moves']
                logger.info(f"Visualizing Puzzle {i+1}")
                visualizer.visualize_puzzle(fen, moves, delay)
                
                # Check for quit event to allow user to exit early
                for event in pygame.event.get():
                    if event.type == pygame.QUIT:
                        visualizer.close()
                        return
        
        visualizer.close()
        
    except Exception as e:
        logger.error(f"Error visualizing puzzles: {e}")
        raise

if __name__ == "__main__":
    # Visualize all puzzles from the CSV file
    csv_file = r"C:\Users\Rip\Desktop\Code\chesspuzzles\puzzle_filterer\lichess_db_puzzle.csv"
    visualize_all_puzzles(csv_file)

