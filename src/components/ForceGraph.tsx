"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const NODE_COUNT = 90;
const LINK_COUNT = 130;

export default function ForceGraph() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = window.innerWidth;
    const height = window.innerHeight;

    svg.attr("width", width).attr("height", height);

    const nodes: { id: number; r: number }[] = Array.from(
      { length: NODE_COUNT },
      (_, i) => ({ id: i, r: Math.random() < 0.15 ? 4 : 2 })
    );

    const links: { source: number; target: number }[] = Array.from(
      { length: LINK_COUNT },
      () => ({
        source: Math.floor(Math.random() * NODE_COUNT),
        target: Math.floor(Math.random() * NODE_COUNT),
      })
    );

    const simulation = d3
      .forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: d3.SimulationNodeDatum) => (d as { id: number }).id)
          .distance(90)
      )
      .force("charge", d3.forceManyBody().strength(-120))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(12));

    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "rgba(255,255,255,0.12)")
      .attr("stroke-width", 1);

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d) => d.r)
      .attr("fill", "rgba(255,255,255,0.55)");

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as d3.SimulationNodeDatum).x ?? 0)
        .attr("y1", (d) => (d.source as d3.SimulationNodeDatum).y ?? 0)
        .attr("x2", (d) => (d.target as d3.SimulationNodeDatum).x ?? 0)
        .attr("y2", (d) => (d.target as d3.SimulationNodeDatum).y ?? 0);

      node
        .attr("cx", (d) => (d as d3.SimulationNodeDatum).x ?? 0)
        .attr("cy", (d) => (d as d3.SimulationNodeDatum).y ?? 0);
    });

    return () => {
      simulation.stop();
      svg.selectAll("*").remove();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 -z-10"
      style={{ background: "#0d0d12" }}
    />
  );
}
