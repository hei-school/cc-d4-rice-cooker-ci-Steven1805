require 'minitest/autorun'

class TestRiceCooker < Minitest::Test
  def setup
    @cooker = RiceCooker.new
  end

  def test_start_cooking_success
    @cooker.set_rice_measurement(2)
    @cooker.set_water_measurement(4)
    result = @cooker.start_cooking
    assert @cooker.is_cooking
    assert_includes result, 'Cooking started'
  end

  def test_start_cooking_fail
    result = @cooker.start_cooking
    refute @cooker.is_cooking
    assert_includes result, 'Unable to start cooking'
  end

  def test_stop_cooking_success
    @cooker.is_cooking = true
    result = @cooker.stop_cooking
    refute @cooker.is_cooking
    assert_equal 'Cooking stopped.', result
  end

  # ... other test methods ...

  def test_reset_measurements
    @cooker.is_cooking = true
    @cooker.set_rice_measurement(2)
    @cooker.set_water_measurement(4)
    result = @cooker.reset_measurements
    refute @cooker.is_cooking
    assert_equal 0, @cooker.rice_measurement
    assert_equal 0, @cooker.water_measurement
    assert_equal 'Measurements and cooking status reset.', result
  end
end
