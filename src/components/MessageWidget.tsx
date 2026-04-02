import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { CloseIcon, ToothIcon, UploadIcon } from "./Icons";

type FormState = {
  name: string;
  email: string;
  contactDetail: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  contactDetail: "",
  message: "",
};

export function MessageWidget() {
  const [open, setOpen] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [files, setFiles] = useState<File[]>([]);
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 30);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-message-widget", onOpen);
    return () => {
      window.removeEventListener("open-message-widget", onOpen);
    };
  }, []);

  const submitLabel = useMemo(() => {
    if (submitState === "submitting") {
      return "Sending...";
    }
    if (submitState === "success") {
      return "Sent";
    }
    return "Submit Message";
  }, [submitState]);

  const closeWidget = () => {
    setOpen(false);
    setSubmitState("idle");
    setErrorMessage("");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    if (!endpoint) {
      setSubmitState("error");
      setErrorMessage(
        "Message delivery is not configured yet. Add VITE_FORM_ENDPOINT to enable inbox routing.",
      );
      return;
    }

    const payload = new FormData();
    payload.append("name", formState.name);
    payload.append("email", formState.email);
    payload.append("contactDetail", formState.contactDetail);
    payload.append("message", formState.message);
    files.forEach((file) => payload.append("attachments", file));

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitState("success");
      setFormState(initialFormState);
      setFiles([]);
    } catch {
      setSubmitState("error");
      setErrorMessage("We could not send your message. Please verify the form service endpoint and try again.");
    }
  };

  return (
    <>
      <button
        id="message-us"
        type="button"
        className={open ? "message-fab open" : "message-fab"}
        aria-expanded={open}
        aria-controls="message-panel"
        onClick={() => setOpen(true)}
      >
        <ToothIcon className="fab-icon" />
        <span>Message Us</span>
      </button>

      <div
        className={open ? "message-overlay open" : "message-overlay"}
        aria-hidden={!open}
        onClick={closeWidget}
      />

      <aside
        id="message-panel"
        className={open ? "message-panel open" : "message-panel"}
        aria-hidden={!open}
      >
        <div className="message-panel-header">
          <div>
            <span className="eyebrow">Contact smilesnonprofit</span>
            <h2>Message Us</h2>
          </div>
          <button type="button" className="icon-button" onClick={closeWidget} aria-label="Close message panel">
            <CloseIcon />
          </button>
        </div>

        <p className="message-panel-copy">
          Share a note, ask about partnerships, or send outreach details. Attach files or images if helpful.
        </p>

        <form className="message-form" onSubmit={onSubmit}>
          <label>
            Full Name
            <input
              ref={firstInputRef}
              type="text"
              value={formState.name}
              onChange={(event) => setFormState({ ...formState, name: event.target.value })}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={formState.email}
              onChange={(event) => setFormState({ ...formState, email: event.target.value })}
              required
            />
          </label>

          <label>
            Phone Or Organization
            <input
              type="text"
              value={formState.contactDetail}
              onChange={(event) => setFormState({ ...formState, contactDetail: event.target.value })}
              placeholder="Optional contact detail"
            />
          </label>

          <label>
            Message
            <textarea
              rows={5}
              value={formState.message}
              onChange={(event) => setFormState({ ...formState, message: event.target.value })}
              required
            />
          </label>

          <label className="upload-field">
            <span>Attachments</span>
            <div className="upload-control">
              <label className="button button-secondary upload-button">
                <UploadIcon />
                Choose Files
                <input
                  type="file"
                  multiple
                  onChange={(event) => {
                    const selected = Array.from(event.target.files ?? []);
                    setFiles(selected);
                  }}
                />
              </label>
            </div>
          </label>

          {files.length ? (
            <ul className="file-list">
              {files.map((file) => (
                <li key={`${file.name}-${file.size}`}>{file.name}</li>
              ))}
            </ul>
          ) : null}

          {submitState === "success" ? (
            <div className="form-feedback success">Thanks. Your message has been queued for delivery.</div>
          ) : null}

          {submitState === "error" ? (
            <div className="form-feedback error">{errorMessage}</div>
          ) : null}

          <button type="submit" className="button button-primary submit-button" disabled={submitState === "submitting"}>
            {submitLabel}
          </button>
        </form>
      </aside>
    </>
  );
}
