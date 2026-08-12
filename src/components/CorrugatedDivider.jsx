export default function CorrugatedDivider() {
  return (
    <div className="corr-strip">
      <svg viewBox="0 0 200 20" preserveAspectRatio="none">
        <polyline
          points="0,20 8,4 16,20 24,4 32,20 40,4 48,20 56,4 64,20 72,4 80,20 88,4 96,20 104,4 112,20 120,4 128,20 136,4 144,20 152,4 160,20 168,4 176,20 184,4 192,20 200,4"
          fill="none"
          stroke="#EEF4FA"
          strokeWidth="1.4"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
