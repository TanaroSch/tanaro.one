import os
import json

def generate_image_list(base_path='images'):
    image_list = []
    
    # List of valid image extensions
    valid_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp']

    # Walk through the 'real' folder
    real_path = os.path.join(base_path, 'real')
    if os.path.exists(real_path):
        for filename in os.listdir(real_path):
            if any(filename.lower().endswith(ext) for ext in valid_extensions):
                image_list.append({
                    "url": f"images/real/{filename}",
                    "isAI": False
                })

    # Walk through the 'AI' folder
    ai_path = os.path.join(base_path, 'AI')
    if os.path.exists(ai_path):
        for filename in os.listdir(ai_path):
            if any(filename.lower().endswith(ext) for ext in valid_extensions):
                image_list.append({
                    "url": f"images/AI/{filename}",
                    "isAI": True
                })

    # Write the image list to a JSON file
    with open('images.json', 'w') as f:
        json.dump(image_list, f, indent=2)

    print(f"Generated images.json with {len(image_list)} images.")

if __name__ == "__main__":
    generate_image_list()