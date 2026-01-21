<script setup lang="ts">
</script>

<template>
  <div class="buttons-page">
    <h1 class="text-headline">Button Styles</h1>

    <!-- Primary Buttons -->
    <section class="button-section">
      <h2 class="text-headline">Primary Buttons</h2>

      <div class="button-row">
        <h3>Large</h3>
        <div class="button-group">
          <button class="btn btn--primary btn--large">
            <span class="btn__text">BUTTON</span>
          </button>
          <button class="btn btn--primary btn--large">
            <span class="btn__text">BUTTON</span>
            <v-icon size="18">mdi-arrow-right</v-icon>
          </button>
          <button class="btn btn--primary btn--large">
            <v-icon size="18">mdi-arrow-left</v-icon>
            <span class="btn__text">BUTTON</span>
          </button>
        </div>
      </div>

      <div class="button-row">
        <h3>Small</h3>
        <div class="button-group">
          <button class="btn btn--primary btn--small">
            <span class="btn__text">BUTTON</span>
          </button>
          <button class="btn btn--primary btn--small">
            <span class="btn__text">BUTTON</span>
            <v-icon size="14">mdi-arrow-right</v-icon>
          </button>
          <button class="btn btn--primary btn--small">
            <v-icon size="14">mdi-arrow-left</v-icon>
            <span class="btn__text">BUTTON</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Secondary Buttons -->
    <section class="button-section">
      <h2 class="text-headline">Secondary Buttons</h2>

      <div class="button-row">
        <h3>Large</h3>
        <div class="button-group">
          <button class="btn btn--secondary btn--large">
            <span class="btn__text">BUTTON</span>
          </button>
          <button class="btn btn--secondary btn--large">
            <span class="btn__text">BUTTON</span>
            <v-icon size="18">mdi-arrow-right</v-icon>
          </button>
          <button class="btn btn--secondary btn--large">
            <v-icon size="18">mdi-arrow-left</v-icon>
            <span class="btn__text">BUTTON</span>
          </button>
        </div>
      </div>

      <div class="button-row">
        <h3>Small</h3>
        <div class="button-group">
          <button class="btn btn--secondary btn--small">
            <span class="btn__text">BUTTON</span>
          </button>
          <button class="btn btn--secondary btn--small">
            <span class="btn__text">BUTTON</span>
            <v-icon size="14">mdi-arrow-right</v-icon>
          </button>
          <button class="btn btn--secondary btn--small">
            <v-icon size="14">mdi-arrow-left</v-icon>
            <span class="btn__text">BUTTON</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Tertiary Buttons -->
    <section class="button-section">
      <h2 class="text-headline">Tertiary Buttons</h2>

      <div class="button-row">
        <h3>Large</h3>
        <div class="button-group">
          <button class="btn btn--tertiary btn--large">
            <span class="btn__text">BUTTON</span>
          </button>
          <button class="btn btn--tertiary btn--large">
            <span class="btn__text">BUTTON</span>
            <v-icon size="18">mdi-arrow-right</v-icon>
          </button>
          <button class="btn btn--tertiary btn--large">
            <v-icon size="18">mdi-arrow-left</v-icon>
            <span class="btn__text">BUTTON</span>
          </button>
        </div>
      </div>

      <div class="button-row">
        <h3>Small</h3>
        <div class="button-group">
          <button class="btn btn--tertiary btn--small">
            <span class="btn__text">BUTTON</span>
          </button>
          <button class="btn btn--tertiary btn--small">
            <span class="btn__text">BUTTON</span>
            <v-icon size="14">mdi-arrow-right</v-icon>
          </button>
          <button class="btn btn--tertiary btn--small">
            <v-icon size="14">mdi-arrow-left</v-icon>
            <span class="btn__text">BUTTON</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Text-Only Buttons -->
    <section class="button-section">
      <h2 class="text-headline">Text-Only Buttons</h2>

      <div class="button-row">
        <h3>Large</h3>
        <div class="button-group">
          <button class="btn btn--text btn--large">
            <span class="btn__text">BUTTON</span>
          </button>
          <button class="btn btn--text btn--large">
            <span class="btn__text">BUTTON</span>
            <v-icon size="18">mdi-arrow-right</v-icon>
          </button>
          <button class="btn btn--text btn--large">
            <v-icon size="18">mdi-arrow-left</v-icon>
            <span class="btn__text">BUTTON</span>
          </button>
        </div>
      </div>

      <div class="button-row">
        <h3>Small</h3>
        <div class="button-group">
          <button class="btn btn--text btn--small">
            <span class="btn__text">BUTTON</span>
          </button>
          <button class="btn btn--text btn--small">
            <span class="btn__text">BUTTON</span>
            <v-icon size="14">mdi-arrow-right</v-icon>
          </button>
          <button class="btn btn--text btn--small">
            <v-icon size="14">mdi-arrow-left</v-icon>
            <span class="btn__text">BUTTON</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.buttons-page {
  padding: 3rem;
  background-color: var(--color-background);
  min-height: 100vh;

  > h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
}

.button-section {
  margin-bottom: 3rem;

  > h2 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--color-border);
  }
}

.button-row {
  margin-bottom: 1.5rem;

  > h3 {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    margin-bottom: 0.75rem;
  }
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

// Base button styles
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  font-family: var(--font-sans);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.15s ease;

  &__text {
    line-height: 1;
  }
}

// Size variants
.btn--large {
  padding: 0.875rem 1.75rem;
  font-size: 0.875rem;
  border-radius: 8px;
}

.btn--small {
  padding: 0.5rem 1.25rem;
  font-size: 0.7rem;
  border-radius: 9999px;
}

// Primary button
.btn--primary {
  background-color: var(--color-primary);
  color: white;

  &:hover {
    background-color: #c8162b;
  }

  &:active {
    background-color: #a01223;
  }
}

// Secondary button (dark gray)
.btn--secondary {
  background-color: var(--color-text-primary);
  color: white;
  border: none;

  &:hover {
    background-color: #000;
  }

  &:active {
    background-color: #333;
  }
}

// Tertiary button (light gray, like icon backgrounds)
.btn--tertiary {
  background-color: rgba(0, 0, 0, 0.06);
  color: var(--color-text-primary);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.15);
  }
}

// Text-only button
.btn--text {
  background-color: transparent;
  color: var(--color-text-primary);
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  &:hover {
    color: var(--color-primary);
  }

  &:active {
    color: #a01223;
  }
}
</style>
