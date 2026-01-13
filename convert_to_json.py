import pandas as pd
import json

# Load the Stata file
df = pd.read_stata('ZA8778_v2-0-0.dta')

# Get language columns and their labels
d48tt_cols = [c for c in df.columns if c.startswith('d48tt_')]
reader = pd.read_stata('ZA8778_v2-0-0.dta', iterator=True)
labels = reader.variable_labels()

# Map column names to clean language names
lang_names = {}
for col in d48tt_cols:
    label = labels.get(col, col)
    lang = label.replace('MOTHER LANGUAGE & OTHER LANGUAGES: ', '').replace(' (SUM)', '')
    # Title case for nicer output
    lang_names[col] = lang.title()

respondents = []

# Build the sets for each respondent
with open('sets.json', 'w') as f:
    f.write('[\n')
    first = True

    for idx, row in df.iterrows():
        # Get languages this person speaks
        languages = []
        for col in d48tt_cols:
            val = row[col]
            if pd.notna(val) and val != 'Not mentioned':
                languages.append(lang_names[col])

        # Skip respondents with no language data
        if not languages:
            continue

        entry = {
            'name': f'{idx:04d}',
            'sets': languages
        }

        respondents.append(entry)

        if not first:
            f.write(',\n')
        first = False

        f.write(json.dumps(entry))

    f.write('\n]\n')

print(f"Written to sets.json")
