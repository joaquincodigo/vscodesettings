import csv
import inquirer
from tqdm import tqdm

def get_side_to_move(fen):
    """Extract the side to move from FEN string"""
    parts = fen.split()
    return parts[1]  # 'w' for white, 'b' for black

def categorize_puzzle(fen):
    """Determine if White or Black wins the puzzle"""
    side_to_move = get_side_to_move(fen)
    return "White wins" if side_to_move == 'w' else "Black wins"

# 1. Define puzzle themes (from your list)
themes = [
    "advancedPawn", "advantage", "anastasiaMate", "arabianMate", "attackingF2F7",
    "attraction", "backRankMate", "bishopEndgame", "bodenMate", "castling",
    "capturingDefender", "crushing", "doubleBishopMate", "dovetailMate", "equality",
    "kingsideAttack", "clearance", "defensiveMove", "deflection", "discoveredAttack",
    "doubleCheck", "endgame", "enPassant", "exposedKing", "fork", "hangingPiece",
    "hookMate", "interference", "intermezzo", "knightEndgame", "long", "master",
    "masterVsMaster", "mate", "mateIn1", "mateIn2", "mateIn3", "mateIn4", "mateIn5",
    "middlegame", "oneMove", "opening", "pawnEndgame", "pin", "promotion", "queenEndgame",
    "queenRookEndgame", "queensideAttack", "quietMove", "rookEndgame", "sacrifice", 
    "short", "skewer", "smotheredMate", "superGM", "trappedPiece", "underPromotion",
    "veryLong", "xRayAttack", "zugzwang", "mix", "playerGames"
]

# 2. Print numbered theme list
print("\nAvailable puzzle themes:")
for idx, theme in enumerate(themes, 1):
    print(f"{idx}. {theme}")

# 3. Prompt user for theme selection
selected_themes = []
while True:
    theme_number = int(input("\nFrom which puzzle theme do you want to filter? (Enter the number): ")) - 1
    selected_themes.append(themes[theme_number])
    add_more = input("Do you want to add an additional theme as filter? (Y/N) ").strip().lower()
    if add_more != 'y':
        break

# 4. Ask max puzzles to filter
max_puzzles = int(input("\nWhat should be the maximum number of puzzles to filter? "))

# 5. Filter and categorize puzzles with progress bar
all_puzzles = []
total_found = 0  # Initialize counter

with open('lichess_db_puzzle.csv', mode='r') as file:
    reader = csv.DictReader(file)
    total_puzzles = sum(1 for _ in file)
    file.seek(0)  # Reset file pointer
    next(reader)  # Skip header

    with tqdm(total=total_puzzles, desc="Scanning") as pbar:
        for row in reader:
            if any(theme in row['Themes'] for theme in selected_themes):
                # Add a sort key based on side to move
                row['side_to_move'] = get_side_to_move(row['FEN'])
                all_puzzles.append(row)
                total_found += 1
                
                # Check if we've reached the maximum
                if total_found >= max_puzzles:
                    break
            
            pbar.update(1)
            pbar.set_postfix(found=total_found)

# Sort puzzles: white first (w), then black (b)
sorted_puzzles = sorted(all_puzzles, key=lambda x: x['side_to_move'], reverse=True)

# 6. Ask output filename
output_filename = input("\nWhat should the output file be named? (without extension): ") + ".csv"

# 7. Write sorted puzzles to CSV
fieldnames = [f for f in reader.fieldnames if f != 'side_to_move']  # Remove our temporary field
with open(output_filename, mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    # Remove the temporary sort key and write the row
    for puzzle in sorted_puzzles:
        del puzzle['side_to_move']
        writer.writerow(puzzle)

# 8. Print summary
white_count = sum(1 for p in sorted_puzzles if get_side_to_move(p['FEN']) == 'w')
black_count = len(sorted_puzzles) - white_count
print(f"\nFiltered puzzles saved to {output_filename}")
print(f"White to move puzzles: {white_count}")
print(f"Black to move puzzles: {black_count}")