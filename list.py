import random

def generate_pin() -> str:
    """
    Generate a random 4-digit PIN as a string.
    Returns:
        str: A 4-digit PIN with leading zeros if necessary.
    """
    return f"{random.randint(0, 9999):04d}"

def main():
    """
    Main function to run the PIN generator script.
    """
    while True:
        print("\nPIN Generator")
        print("1. Generate PIN")
        print("2. Exit")
        choice = input("Enter your choice (1 or 2): ").strip()

        if choice == '1':
            pin = generate_pin()
            print(f"Generated PIN: {pin}")
        elif choice == '2':
            print("Exiting the PIN generator. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter 1 or 2.")

if __name__ == "__main__":
    main()
