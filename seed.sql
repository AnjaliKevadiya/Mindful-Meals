use diet_planner_db;

-- User --
INSERT INTO users
    (first_name, last_name, age, height, weight, no_of_active_days, lose_or_gain_weight, email, password, createdAt, updatedAt)
VALUES
    ("Selena", "Gomez", 28, "5'4", 120, 5, "gain", "sel@gmail.com", 123, CURDATE(), CURDATE()),
    ("Kyle", "Johnson", 28, "5'2", 200, 5, "lose", "kyle@gmail.com", 123, CURDATE(), CURDATE()),
    ("Simon", "Smith", 40, "5'8", 170, 0, "gain", "simon@gmail.com", 123, CURDATE(), CURDATE());
    
-- Daily Intake --

-- Nutrients --
