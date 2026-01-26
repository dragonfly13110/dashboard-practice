import pandas as pd
import os

# Define filenames
csv_filename = 'ข้อมูลพื้นที่การเกษตร_มีข้อผิดพลาด.csv'
excel_filename = 'ข้อมูลพื้นที่การเกษตร_มีข้อผิดพลาด.xlsx'

try:
    # Try reading with utf-8-sig (handles BOM if present) which is common for Thai CSVs
    print(f"Reading {csv_filename}...")
    df = pd.read_csv(csv_filename, encoding='utf-8-sig')
    
    # Create Excel writer
    print(f"Converting to {excel_filename}...")
    df.to_excel(excel_filename, index=False, engine='openpyxl')
    
    print(f"Successfully created: {os.path.abspath(excel_filename)}")

except FileNotFoundError:
    print(f"Error: Dictionary file '{csv_filename}' not found.")
except Exception as e:
    print(f"An error occurred: {e}")
