export const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "binding", label: "Binding Wire" },
  { id: "angles", label: "Angles" },
  { id: "rackplate", label: "Steel Rack Plate" },
  { id: "racks", label: "Steel Racks" },
  { id: "barbed", label: "Barbed Wire" },
  { id: "fencewire", label: "Fencing Wire" },
  { id: "fencenet", label: "Fencing Net" },
];

export const CAT_LABEL = CATEGORIES.reduce((acc, c) => {
  acc[c.id] = c.label;
  return acc;
}, {});

export const PRODUCTS = [
  { cat: "binding", name: "18G Binding Wire", desc: "Soft-drawn wire for rebar tying, per kg or coil.", image: "BindingWire1.png"},
  { cat: "binding", name: "GI Binding Wire", desc: "Galvanised binding wire, rust resistant.", image: "BindingWire2.png"},
  { cat: "angles", name: "Heavy Duty Angles", desc: "For steel racks and structural applications.", image: "Angles1.png"},
  { cat: "rackplate", name: "Steel Rack Plates", desc: "Shelving plates for godown & warehouse racks.", image: "Racks1.png"},
  { cat: "racks", name: "Storage Racks", desc: "Heavy-duty steel racks for warehouses & godowns.", image: "StorageRack1.png"},
  { cat: "racks", name: "Slotted Angle Racks", desc: "Adjustable racking for shops & storerooms.", image: "StorageRack1.png"},
  { cat: "barbed", name: "Barbed Wire", desc: "Barbed wire for boundary & farm fencing.", image: "BarbedWire1.png"},
  { cat: "fencewire", name: "Chain Link Fencing Wire", desc: "Woven mesh fencing, multiple gauges.", image: "Fencewire1.png"},
  { cat: "fencenet", name: "Compound Fencing Net", desc: "Durable net fencing for site & property boundaries.", image: "Fencewire1.png"},
];
