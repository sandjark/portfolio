<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:workflow-rules -->
# Workflow Rules

- **Iterate locally first** — always test changes on localhost (`npm run dev`) before deploying
- **Do NOT auto-deploy** — only push to GitHub/Vercel when explicitly asked by the user
- Use `./skills/deploy.sh` to deploy when instructed
<!-- END:workflow-rules -->
