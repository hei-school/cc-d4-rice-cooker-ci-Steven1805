import unittest
from unittest.mock import patch
from io import StringIO

class TestRiceCooker(unittest.TestCase):

    def setUp(self):
        self.cooker = RiceCooker()

    def test_start_cooking_success(self):
        self.cooker.set_rice_measurement(2)
        self.cooker.set_water_measurement(4)
        result = self.cooker.start_cooking()
        self.assertTrue(self.cooker.is_cooking)
        self.assertIn("Cooking started", result)

    def test_start_cooking_fail(self):
        result = self.cooker.start_cooking()
        self.assertFalse(self.cooker.is_cooking)
        self.assertIn("Unable to start cooking", result)

    def test_stop_cooking_success(self):
        self.cooker.is_cooking = True
        result = self.cooker.stop_cooking()
        self.assertFalse(self.cooker.is_cooking)
        self.assertEqual("Cooking stopped.", result)

    def test_stop_cooking_fail(self):
        result = self.cooker.stop_cooking()
        self.assertFalse(self.cooker.is_cooking)
        self.assertEqual("No cooking in progress.", result)

    def test_is_rice_cooked(self):
        self.cooker.is_cooking = True
        result = self.cooker.is_rice_cooked()
        self.assertTrue(result)

    def test_is_not_rice_cooked(self):
        result = self.cooker.is_rice_cooked()
        self.assertFalse(result)

    def test_get_cooking_status_cooking(self):
        self.cooker.is_cooking = True
        result = self.cooker.get_cooking_status()
        self.assertEqual("Cooking in progress.", result)

    def test_get_cooking_status_not_cooking(self):
        result = self.cooker.get_cooking_status()
        self.assertEqual("No cooking in progress.", result)

    def test_stop_and_check_cooking_cooking(self):
        self.cooker.is_cooking = True
        result = self.cooker.stop_and_check_cooking()
        self.assertFalse(self.cooker.is_cooking)
        self.assertIn("Cooking stopped", result)
        self.assertIn("Rice is cooked!" if self.cooker.is_rice_cooked() else "Rice is not cooked.", result)

    def test_stop_and_check_cooking_not_cooking(self):
        result = self.cooker.stop_and_check_cooking()
        self.assertFalse(self.cooker.is_cooking)
        self.assertEqual("No cooking in progress.", result)

    def test_reset_measurements(self):
        self.cooker.is_cooking = True
        self.cooker.set_rice_measurement(2)
        self.cooker.set_water_measurement(4)
        result = self.cooker.reset_measurements()
        self.assertFalse(self.cooker.is_cooking)
        self.assertEqual(0, self.cooker.rice_measurement)
        self.assertEqual(0, self.cooker.water_measurement)
        self.assertEqual("Measurements and cooking status reset.", result)


class TestCommandLineInterface(unittest.TestCase):

    @patch("builtins.input", side_effect=['1', '2', '3', '4', '5', '6', '7', '8', 'q'])
    @patch("sys.stdout", new_callable=StringIO)
    def test_cli_actions(self, mock_stdout, mock_input):
        with patch("sys.stdin", StringIO("2\n")):  # Mocking user input for setting rice measurement
            prompt_user()
        output = mock_stdout.getvalue()
        self.assertIn("Cooking stopped.", output)
        self.assertIn("Invalid choice", output)

if __name__ == '__main__':
    unittest.main()
