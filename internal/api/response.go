package api

import (
	"encoding/json"
	"net/http"
)

func writeJSON(w http.ResponseWriter, status int, data any) {
	// ...
}


func writeError(w http.ResponseWriter, status int, msg string) {
	// ...
}

