# App Screenshots

Drop your screenshot images into this folder, then update `Screenshots.jsx` to import them.

## Expected files

| Filename          | Screen              | Recommended size         |
|-------------------|---------------------|--------------------------|
| `dashboard.png`   | Home / Dashboard    | 390 × 844 px (portrait)  |
| `reminders.png`   | Reminders / Alerts  | 390 × 844 px (portrait)  |
| `fuel.png`        | Fuel Tracker        | 390 × 844 px (portrait)  |
| `garage.png`      | Garage / Bike list  | 390 × 844 px (portrait)  |
| `documents.png`   | Document Vault      | 390 × 844 px (portrait)  |

## How to activate an image

1. Add the file here, e.g. `dashboard.png`
2. Open `src/components/Screenshots/Screenshots.jsx`
3. Add an import at the top:
   ```js
   import dashboardImg from '../../assets/screenshots/dashboard.png'
   ```
4. Set `src: dashboardImg` on the matching screen object in the `screens` array.

Any standard web format works: `.png`, `.jpg`, `.webp`.
