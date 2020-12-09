use diet_planner_db;

-- User --
INSERT INTO Users
    (first_name, last_name, age, height, weight, no_of_active_days, lose_or_gain_weight, email, password, createdAt, updatedAt)
VALUES
    ("Selena", "Gomez", 28, "5'4", 120, 5, "gain", "sel@gmail.com", 123, CURDATE(), CURDATE()),
    ("Kyle", "Johnson", 28, "5'2", 200, 5, "lose", "kyle@gmail.com", 123, CURDATE(), CURDATE()),
    ("Simon", "Smith", 40, "5'8", 170, 0, "gain", "simon@gmail.com", 123, CURDATE(), CURDATE());

-- Daily Intake --
INSERT INTO DailyIntakes
    (name_of_food, createdAt, updatedAt, UserId)
VALUES
    ("banana", CURDATE(), CURDATE(), 1),
    ("pancake", CURDATE(), CURDATE(), 2),
    ("oatmeal", CURDATE(), CURDATE(), 3),
    ("pizza", CURDATE(), CURDATE(), 1),
    ("salad", CURDATE(), CURDATE(), 2),
    ("milkshake", CURDATE(), CURDATE(), 3);

-- Nutrients --
INSERT INTO Nutrients
    (protein, carbs, fats, fiber, calories, createdAt, updatedAt, DailyIntakeId)
VALUES
    (1, 2, 3, 4, 5, CURDATE(), CURDATE(), 1),
    (2, 3, 4, 5, 20, CURDATE(), CURDATE(), 2),
    (1, 2, 3, 4, 10, CURDATE(), CURDATE(), 3),
    (1, 2, 3, 4, 50, CURDATE(), CURDATE(), 4),
    (1, 2, 3, 4, 5, CURDATE(), CURDATE(), 5),
    (1, 2, 3, 4, 100, CURDATE(), CURDATE(), 6);