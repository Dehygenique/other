export const metricsData = {
  brandHealth: {
    score: 85,
    trend: "+3 vs last quarter",
    components: [
      { name: "Brand Awareness", value: 78, max: 100 },
      { name: "Brand Perception", value: 91, max: 100 },
      { name: "Customer Loyalty", value: 88, max: 100 },
      { name: "Market Position", value: 82, max: 100 },
    ],
  },
  keyMetrics: [
    { label: "Brand Awareness", value: "78%", change: "+5%", trend: "up" },
    { label: "Customer Satisfaction", value: "4.8/5", change: "+0.3", trend: "up" },
    { label: "Market Position", value: "#3", change: "+1", trend: "up" },
    { label: "Revenue Growth", value: "+32%", change: "YoY", trend: "up" },
  ],
  contentPerformance: [
    { month: "Jan", engagement: 4200, reach: 18000, conversions: 320 },
    { month: "Feb", engagement: 5100, reach: 21000, conversions: 410 },
    { month: "Mar", engagement: 4800, reach: 19500, conversions: 380 },
    { month: "Apr", engagement: 6200, reach: 26000, conversions: 510 },
    { month: "May", engagement: 7100, reach: 31000, conversions: 620 },
    { month: "Jun", engagement: 6800, reach: 29000, conversions: 580 },
    { month: "Jul", engagement: 8200, reach: 35000, conversions: 710 },
    { month: "Aug", engagement: 9100, reach: 39000, conversions: 820 },
    { month: "Sep", engagement: 8700, reach: 37000, conversions: 780 },
    { month: "Oct", engagement: 10200, reach: 43000, conversions: 920 },
    { month: "Nov", engagement: 11500, reach: 48000, conversions: 1050 },
    { month: "Dec", engagement: 12800, reach: 54000, conversions: 1180 },
  ],
  audienceSegments: [
    { name: "Thinkers", value: 55, color: "#C8B89A" },
    { name: "Achievers", value: 45, color: "#8B7355" },
  ],
};
