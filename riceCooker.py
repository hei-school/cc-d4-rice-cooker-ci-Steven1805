class RiceCooker:
    def __init__(self):
        self.is_cooking = False
        self.rice_measurement = 0  # en tasses
        self.water_measurement = 0  # en tasses

    def set_rice_measurement(self, tasses):
        self.rice_measurement = tasses

    def set_water_measurement(self, tasses):
        self.water_measurement = tasses

    def start_cooking(self):
        if not self.is_cooking and self.rice_measurement > 0 and self.water_measurement > 0:
            self.is_cooking = True
            return f"Cooking started with {self.rice_measurement} cups of rice and {self.water_measurement} cups of water."
        else:
            return "Unable to start cooking. Please check rice and water measurements."

    def stop_cooking(self):
        if self.is_cooking:
            self.is_cooking = False
            return "Cooking stopped."
        else:
            return "No cooking in progress."

    def is_rice_cooked(self):
        return self.is_cooking  # Logic to check if rice is cooked (for simplicity, always true for demonstration)

    def get_cooking_status(self):
        return "Cooking in progress." if self.is_cooking else "No cooking in progress."

    def stop_and_check_cooking(self):
        if self.is_cooking:
            self.is_cooking = False
            is_rice_cooked = "Rice is cooked!" if self.is_rice_cooked() else "Rice is not cooked."
            return f"Cooking stopped. {is_rice_cooked}"
        else:
            return "No cooking in progress."

    def reset_measurements(self):
        self.is_cooking = False
        self.rice_measurement = 0
        self.water_measurement = 0
        return "Measurements and cooking status reset."


# Interface de ligne de commande simple
cooker = RiceCooker()


def prompt_user():
    choice = input('Choose an action (1-7):\n1. Start Cooking\n2. Stop Cooking\n3. Check Cooking Status\n'
                   '4. Stop and Check Cooking\n5. Reset Measurements\n6. Set Rice Measurement\n'
                   '7. Set Water Measurement\n')

    if choice == '1':
        print(cooker.start_cooking())
    elif choice == '2':
        print(cooker.stop_cooking())
    elif choice == '3':
        print(cooker.get_cooking_status())
    elif choice == '4':
        print(cooker.stop_and_check_cooking())
    elif choice == '5':
        print(cooker.reset_measurements())
    elif choice == '6':
        rice_measurement = float(input('Enter the rice measurement in cups: '))
        cooker.set_rice_measurement(rice_measurement)
        print(f'Rice measurement set to {rice_measurement} cups.')
    elif choice == '7':
        water_measurement = float(input('Enter the water measurement in cups: '))
        cooker.set_water_measurement(water_measurement)
        print(f'Water measurement set to {water_measurement} cups.')
    else:
        print('Invalid choice. Please enter a number between 1 and 7.')

    prompt_user()


prompt_user()
