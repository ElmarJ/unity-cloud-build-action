<p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# Action

This action allows to build your Unity project on Unity Cloud Build as a Github-action. Generally, this should be much faster than running the build-process on Github servers. Note that it's a very basic Github Action and does it does not store the build result (no artifacts), so you can only use it to run a build as a code-check. Storing artificacts should be rather trivial to implement, but it wasn't necessary for my purposes - feel free to send a PR. :)

# Usage

See for a usage example this file: https://github.com/ElmarJ/Waterlooplein3D/blob/main/.github/workflows/cloud-build-action.yml
