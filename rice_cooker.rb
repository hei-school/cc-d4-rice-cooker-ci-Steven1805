class RiceCooker
    attr_accessor :is_cooking, :rice_measurement, :water_measurement
  
    def initialize
      @is_cooking = false
      @rice_measurement = 0
      @water_measurement = 0
    end
  
    def set_rice_measurement(tasses)
      @rice_measurement = tasses
    end
  
    def set_water_measurement(tasses)
      @water_measurement = tasses
    end
  
    def start_cooking
      if !@is_cooking && @rice_measurement > 0 && @water_measurement > 0
        @is_cooking = true
        "Cooking started with #{@rice_measurement} cups of rice and #{@water_measurement} cups of water."
      else
        "Unable to start cooking. Please check rice and water measurements."
      end
    end
  
    def stop_cooking
      if @is_cooking
        @is_cooking = false
        "Cooking stopped."
      else
        "No cooking in progress."
      end
    end
  
    def is_rice_cooked
      @is_cooking
    end
  
    def get_cooking_status
      @is_cooking ? "Cooking in progress." : "No cooking in progress."
    end
  
    def stop_and_check_cooking
      if @is_cooking
        @is_cooking = false
        is_rice_cooked = @is_cooking ? "Rice is cooked!" : "Rice is not cooked."
        "Cooking stopped. #{is_rice_cooked}"
      else
        "No cooking in progress."
      end
    end
  
    def reset_measurements
      @is_cooking = false
      @rice_measurement = 0
      @water_measurement = 0
      "Measurements and cooking status reset."
    end
  end
  
  # Interface en ligne de commande simple
  cooker = RiceCooker.new
  
  def prompt_user
    loop do
      puts 'Choose an action (1-7):'
      puts '1. Start Cooking'
      puts '2. Stop Cooking'
      puts '3. Check Cooking Status'
      puts '4. Stop and Check Cooking'
      puts '5. Reset Measurements'
      puts '6. Set Rice Measurement'
      puts '7. Set Water Measurement'
  
      answer = gets.chomp
  
      case answer
      when '1'
        puts cooker.start_cooking
      when '2'
        puts cooker.stop_cooking
      when '3'
        puts cooker.get_cooking_status
      when '4'
        puts cooker.stop_and_check_cooking
      when '5'
        puts cooker.reset_measurements
      when '6'
        print 'Enter the rice measurement in cups: '
        rice_measurement = gets.chomp.to_f
        cooker.set_rice_measurement(rice_measurement)
        puts "Rice measurement set to #{rice_measurement} cups."
      when '7'
        print 'Enter the water measurement in cups: '
        water_measurement = gets.chomp.to_f
        cooker.set_water_measurement(water_measurement)
        puts "Water measurement set to #{water_measurement} cups."
      else
        puts 'Invalid choice. Please enter a number between 1 and 7.'
      end
    end
  end
  
  prompt_user
  