import os
import json

def get_files():
    # Use git ls-files to get the list of files
    files_list = os.popen('git ls-files').read().splitlines()
    
    files_to_push = []
    # Exclude large binary or auto-generated files for the MCP tool
    exclude = ['package-lock.json', 'LOGO_MAHALAXMI ESTATE (1).zip', 'LOGO_MAHALAXMI ESTATE.zip', 'Mahalaxmi Broucher.pdf']
    
    for file_path in files_list:
        if any(ex in file_path for ex in exclude) or os.path.isdir(file_path):
            continue
            
        try:
            with open(file_path, 'rb') as f:
                content = f.read()
                
            # Only push text files via MCP string content
            try:
                text_content = content.decode('utf-8')
                files_to_push.append({
                    "path": file_path,
                    "content": text_content
                })
            except UnicodeDecodeError:
                # Skip binary files
                continue
        except Exception as e:
            print(f"Error reading {file_path}: {e}")
            
    return files_to_push

if __name__ == "__main__":
    files = get_files()
    print(json.dumps(files))
