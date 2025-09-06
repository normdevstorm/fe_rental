#!/bin/bash

# Check if feature name is provided
if [ -z "$1" ]; then
    echo "Error: Please provide a feature name"
    echo "Usage: ./create_feature.sh <feature_name>"
    exit 1
fi

FEATURE_NAME=$1
BASE_DIR="src"

# Text colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Array of directories to create
DIRECTORIES=(
    "data/$FEATURE_NAME/api"
    "data/$FEATURE_NAME/model"
    "data/$FEATURE_NAME/repository"
    "domain/$FEATURE_NAME/entities"
    "domain/$FEATURE_NAME/repositories"
    "domain/$FEATURE_NAME/usecases"
    "presentation/$FEATURE_NAME/stores"
    "presentation/$FEATURE_NAME/ui/components"
    "presentation/$FEATURE_NAME/ui/pages"
    "presentation/$FEATURE_NAME/ui/layouts"
)

created_count=0
skipped_count=0

# Create each directory
for dir in "${DIRECTORIES[@]}"; do
    FULL_PATH="$BASE_DIR/$dir"
    if [ ! -d "$FULL_PATH" ]; then
        mkdir -p "$FULL_PATH"
        echo -e "${GREEN}Created directory:${NC} $FULL_PATH"
        ((created_count++))
    else
        echo -e "${YELLOW}Directory already exists:${NC} $FULL_PATH"
        ((skipped_count++))
    fi
done

echo -e "\n✨ Feature structure for '$FEATURE_NAME' has been processed:"
echo -e "${GREEN}Created:${NC} $created_count directories"
echo -e "${YELLOW}Skipped:${NC} $skipped_count existing directories"
