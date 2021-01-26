TRUNCATE notes, folders RESTART IDENTITY CASCADE;

INSERT INTO folders (name)
VALUES
  ('Bills'),
  ('Chores'),
  ('Shopping'),
  ('Work');

INSERT INTO notes (name, content, folder_id)

VALUES
  ('Phone bill', 'This is the phone bill', 1),
  ('Clean bathroom', 'This is a chore', 2);