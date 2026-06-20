# Gemini Enterprise Pilot — Kuwait University

Persona campaign microsites for the **Gemini Enterprise Pilot at Kuwait University**
(Google Cloud + Deloitte). Static site on GitHub Pages, Arabic-first with an English
mirror. Each persona page drives sign-ups to a Microsoft Form locked to `ku.edu.kw`.

**Live:** https://malmarz.github.io/ku-gemini/

## Structure

```
index.html          Arabic landing (default) — 3 persona cards + lang toggle
en/index.html       English landing
faculty.html        en/faculty.html
students.html       en/students.html
employees.html      en/employees.html
assets/
  style.css         KU theme (Sky/Navy/Gold + Cairo), one sheet, RTL+LTR via logical props
  forms.js          central registry of the 3 MS Form URLs (edit here once)
  ku-logo.png
```

## Wiring the sign-up forms

Buttons read their URL from `assets/forms.js` via a `data-form` attribute. After the
three Microsoft Forms exist, set the three URLs in one place:

```js
window.KU_FORMS = {
  faculty:   "https://forms.office.com/r/XXXXXXXXXX",
  students:  "https://forms.office.com/r/YYYYYYYYYY",
  employees: "https://forms.office.com/r/ZZZZZZZZZZ",
};
```

Commit + push; every CTA across all pages picks them up.

## Microsoft Forms — field spec (per form)

Create 3 forms in the KU O365 tenant. Setting: **"Only people in my organization
can respond"** (native `ku.edu.kw` restriction + auto-captures email). One form per
persona.

| # | Question | Type | Required |
|---|----------|------|----------|
| 1 | Full name | Text | Yes |
| 2 | KU email | Text | Yes |
| 3 | Phone number | Text | Yes |
| 4 | College / Department | Text (or Choice) | Yes |
| 5 | How I plan to use Gemini in my work / study / research | Long text | Yes |
| 6 | Role nomination (optional) | Choice | No |

Question 6 choices differ by persona:
- **Faculty:** Participant only · Volunteer as college Champion · Volunteer as faculty Facilitator (SPOC)
- **Students:** Participant only · Become a Student Ambassador
- **Employees:** Participant only · Volunteer as department/center Champion

Form titles:
- `Gemini Enterprise Pilot — Faculty Sign-up`
- `Gemini Enterprise Pilot — Student Sign-up`
- `Gemini Enterprise Pilot — Employee Sign-up`

## Open items

- Confirm KU **students** are in the same `ku.edu.kw` O365 tenant. If not, the student
  form uses "anyone can respond" + a manual KU-ID field.
- Confirm Google/Deloitte logo usage on a public KU site (currently names only, no logos).

Spec of record: `avpit-brain/_meta/initiatives/gemini-enterprise/campaign-site-spec.md`
