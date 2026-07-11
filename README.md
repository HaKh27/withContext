# withContext

A context-aware translation tool for bilingual workplaces.

Live demo: https://withcontext.vercel.app

## The problem

Most translation apps convert words, not meaning. In a busy
restaurant, tone matters: correcting a new hire, thanking a
long-time cook, and announcing an early close all need to sound
different. A literal translation often lands wrong.

## What it does

withContext asks who the message is for and what the situation
is, then translates the way a bilingual coworker would actually
say it.

- Writing a message: get three phrasing options in different
  tones, each with the original and its translation.
- Reading a message: get an exact translation plus a plain
  explanation of what the person really means.

## Why I built it

I manage operations at a family restaurant with a bilingual
team, and kept hitting the limits of literal translation with
staff. I built this to solve a problem I actually have.

## Built with

- Claude (Anthropic API) for the translation
- Vercel serverless function as a backend that keeps the API
  key secure
- Vanilla HTML, CSS, and JavaScript
