---
title: "Resources"
description: "Explore the docs, View the Repo, Read the Standard."
lead: "Get further information into current and past activities following these links."
headerImage: "/images/headers/lego-brick.webp"
layout: resources
containerClass: "page-custom"
url: "/resources/"
---

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-16 col-lg-14 col-xl-14">
      <div class="section">
        <h2>Materials</h2>
        <div class="alert alert-info">
          <p class="mb-0"><strong>Please Note:</strong> Our Docs & GitHub are going under a restructure, come back soon to new and improved content.</p>
        </div>
        <h3 class="h4 mb-1">Community Member Starter Kit <span class="badge fs-6 bg-primary align-top ms-3">Coming soon!</span></h3>
        <p>Understand how you can contribute as a community member and how the open source community operates</p>
        <h3 class="h4 mb-1">Enablement Master Deck <span class="badge fs-6 bg-primary align-top ms-3">Coming soon!</span></h3>
        <p>Share how Baseline can directly impact use cases with your peers</p>
        <h3 class="h4 mb-1">Baseline Core Dev Onboarding Kit <span class="badge fs-6 bg-primary align-top ms-3">Coming soon!</span></h3>
        <p class="mb-0">Your one stop shop to learning how to use and develop further implementations to the Baseline Protocol</p>
      </div>
      <div class="section pt-0">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col d-flex">
            <div class="card card-xxl flex-fill mb-4 mb-lg-0">
              <div class="card-body">
                <h2 class="mt-0">Explore the docs</h2>
                <a href="https://docs.baseline-protocol.org/" class="mb-4">
                  <h3 class="h4">Understand the basics</h3>
                  <p>Architecture, high level examples, and the value.</p>
                </a>
                <a href="https://docs.baseline-protocol.org/community/open-source-community" class="mb-4">
                  <h3 class="h4">Meet the community members</h3>
                  <p>Community organizers, technical steering committee, core devs, and others.</p>
                </a>
                <a href="https://docs.baseline-protocol.org/governance/governance">
                  <h3 class="h4">Understand the governance</h3>
                  <p>Learn how the open source protocol is governed.</p>
                </a>
              </div>
            </div>
          </div>
          <div class="col d-flex">
            <div class="card card-xxl flex-fill">
              <div class="card-body">
                <h2 class="mt-0">View the repo</h2>
                <a href="https://github.com/orgs/eea-oasis/repositories" class="mb-4">
                  <h3 class="h4">Look through the code</h3>
                  <p>View the core and baseline reference implementation packages.</p>
                </a>
                <a href="https://github.com/eea-oasis/baseline-blips" class="mb-4">
                  <h3 class="h4">Add Baseline Improvement Proposals (BLIPs)</h3>
                  <p>Suggest improvements and additions to Baseline for our roadmap.</p>
                </a>
                <a href="https://github.com/eea-oasis/baseline-roadmap">
                  <h3 class="h4">See the roadmap</h3>
                  <p>Learn the direction and plan for Baseline outlined by the technical steering committee, core devs, sponsors, and other community members.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section pt-0">
        <h2 class="mt-0">Read the standard</h2>
        <p>Read the 3 Baseline specfications in development</p>
        <div class="row row-cols-lg-3">
          <div class="col d-flex">
            <div class="card bg-white border-primary flex-fill flex-column card-body mb-4">
            <h3 class="h4">Baseline Core</h3>
            <p>Describes the minimal set of business and technical prerequisites, functional and non-functional requirements, together with a reference architecture that when implemented ensures that two or more systems of record can synchronize.</p>
            <a href="https://github.com/eea-oasis/baseline-standard/tree/main/core" class="mt-auto btn btn-lg btn-primary">Read more</a>
            </div>
          </div>
          <div class="col d-flex">
            <div class="card bg-white border-primary flex-fill flex-column card-body mb-4">
            <h3 class="h4">Baseline API & Data Model</h3>
            <p>Describes the Baseline programming interface and expected behaviors of all instances of this interface together with the required programming interface data model.</p>
            <a href="https://github.com/eea-oasis/baseline-standard/tree/main/api" class="mt-auto btn btn-lg btn-primary">Read more</a>
            </div>
          </div>
          <div class="col d-flex">
            <div class="card bg-white border-primary flex-fill flex-column card-body mb-4">
            <h3 class="h4">Permissionless CCSM Requirements</h3>
            <p>Describes required and assumed properties and qualities of a singleton state machine and its operating environment for such a CCSM to safely synchronize two or more enterprise systems of record.</p>
            <a href="https://github.com/eea-oasis/baseline-standard/tree/main/ccsm" class="mt-auto btn btn-lg btn-primary">Read more</a>
            </div>
          </div>
        </div>
      </div>
      <div class="section pt-0">
        <h2 class="mt-0">Baseline Demos and Walkthroughs</h2>
        <div class="ratio ratio-16x9">
          <iframe
            class="lazyload"
            width="560"
            height="315"
            data-src="https://www.youtube.com/embed/C96wepNNP4Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="section pt-0">
        <h2 class="mt-0">Architecture</h2>
        <p>The Baseline Protocol provides a framework that allows Baseline Protocol Implementations (BPIs) to establish a common (business) frame of reference enabling confidential and complex (business) collaborations between enterprises without moving any sensitive data between traditional Systems of Record.</p>
        <p>Presented below, a reference architecture that when implemented ensures that two or more systems of record can synchronize their system state over a permissionless public Consensus Controlled State Machine (CCSM) network.</p>
        <p><a href="https://docs.baseline-protocol.org/">Read the docs</a> for more technical details.</p>
        <img data-src="/images/High-Level-Baseline-Architecture.png" alt="" class="img-fluid lazyload mt-4">
      </div>
    </div>
  </div>
</div>
