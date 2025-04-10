package miniapp

import (
	"embed"
	"io/fs"
	"net/http"
	"strings"
)

//go:embed dist/*
var distFS embed.FS

// Handler returns an http.Handler that serves the Mini App SPA.
// All unknown paths fallback to index.html for client-side routing.
func Handler() http.Handler {
	// ...
}

