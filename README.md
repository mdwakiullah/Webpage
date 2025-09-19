# Chat UI - Responsive Chat Application

A modern, responsive chat UI built with Next.js, Tailwind CSS, and Shadcn UI components.

## Features

- 📱 **Fully Responsive**: Perfect layout across desktop, tablet, and mobile devices
- 🎨 **Modern Design**: Clean, professional interface with smooth animations
- 🧩 **Modular Components**: Reusable components for easy customization and extension
- ♿ **Accessibility**: Built with accessibility best practices
- 🌙 **Dark Mode Ready**: CSS variables for easy theme switching
- ⚡ **Performance**: Optimized for fast loading and smooth interactions

## Components

- **ChatSidebar**: Collapsible sidebar with chat list and search functionality
- **ChatHeader**: Header with channel info, member count, and action buttons
- **MessageList**: Scrollable message feed with reactions and threading
- **MessageInput**: Rich message input with attachments and emoji support
- **TabNavigation**: Customizable tab navigation for filtering messages

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn UI**: High-quality, accessible component library
- **Lucide React**: Beautiful, customizable icons

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Webpage
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

To build the application for production:

```bash
npm run build
npm start
```

## Customization

The chat UI is built with modular components that can be easily customized:

- Modify colors and themes in `tailwind.config.js` and `globals.css`
- Customize component behavior in individual component files
- Add new message types or features by extending the existing components

## Responsive Breakpoints

- **Mobile**: < 768px (single column, collapsible sidebar)
- **Tablet**: 768px - 1024px (adaptive layout)
- **Desktop**: > 1024px (full sidebar with all features)

## License

This project is open source and available under the [MIT License](LICENSE).