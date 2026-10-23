import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

// Content taken from Manish Chandra's CV (static/resume.pdf).

const research = [
  {
    title:
      'Phase-Induced Chromatic Transition in [Co(INA)₂] MOFs: DFT-based Study of Gate-Controlled Solvent Interaction',
    tags: ['DFT+U', 'Quantum ESPRESSO', 'DRS', 'FTIR', 'TGA'],
    text: `Experimental techniques (DRS, FTIR, TGA) and periodic DFT+U calculations were used to examine the
      reversible purple-pink to orange colour shift in the [Co(INA)₂] framework. The crystals change colour on
      exposure to moisture or heat (70–120 °C), which correlates with the movement of guest molecules (such as
      DMF and water) in and out of the pores. Computed HOMO–LUMO gaps across five polymorphs appear to align with
      the experimental colour shifts (497 nm to 533 nm) observed by DRS. PDOS analysis suggests that the colour
      change is likely driven by rotation of the ligand's pyridyl rings on interaction with guest molecules,
      rather than a transition at the cobalt centre itself.`,
  },
  {
    title:
      'Solvent-Induced Redox Reactions in Copper Coordination Polymers: Catalysis and Electrochemical Hydrogen Evolution',
    tags: ['Coordination polymers', 'Electrocatalysis', 'HER', 'LSV'],
    text: `Studied solvent-induced redox transformations in copper-based coordination polymers, including
      [Cu(INA)Cl₃]ₙ and [Cu(4,4'-bipy)Cl₃]ₙ. Exposure to coordinating solvents triggers a solid-to-solid phase
      transformation, seemingly driven by oxidation of the metal centres from Cu(I) to Cu(II); this could be
      temporarily reversed with an aqueous solution of ascorbic acid and chloride ions. The complexes were also
      evaluated for electrocatalytic hydrogen evolution: preliminary linear sweep voltammetry indicates that the
      [Cu(H₂O)₂(4,4'-bipy)₄] complex might reach the benchmark current density of 10 mA/cm² at an overpotential
      of 0.134 V.`,
  },
  {
    title:
      'Choosing a Dopant in a Copper Coordination Polymer for the Hydrogen Evolution Reaction using DFT Free-Energy Calculations',
    tags: ['DFT', 'Gibbs free energy', 'HER'],
    text: `Investigates the effect of dopant selection on the catalytic performance of a copper-based
      coordination polymer for the hydrogen evolution reaction (HER), using density functional theory to compute
      the Gibbs free energy of hydrogen adsorption (ΔG<sub>H*</sub>) at various active sites.`,
  },
];

const publications = [
  {
    type: 'Preprint',
    title:
      'Phase-Induced Chromatic Transition in [Co(INA)₂] MOFs: DFT based study of Gate-Controlled Solvent Interaction',
    authors: 'Manish Chandra, Supriya Sabbani',
    url: 'https://figshare.com/s/7b59c8fa3c002b0f1171',
    venue: 'figshare',
  },
];

const certifications = [
  {
    title: 'NET Fellowship – Computer Science and Applications',
    detail: 'University Grants Commission (UGC) · ranked in the top 6%',
  },
  {
    title: 'GATE – Chemistry',
    detail: 'Qualified the Graduate Aptitude Test in Engineering',
  },
  {
    title: 'Object-Oriented Programming and Functional Programming in Python',
    detail: 'LinkedIn Learning · Jun 2021 – Jul 2021',
  },
];

const activities = [
  {
    title: 'Lead, Technical Club',
    org: 'Indian Institute of Technology Madras',
    detail:
      'Coordinated technical events and workshops, fostering peer learning and collaborative problem-solving.',
  },
  {
    title: 'Member, Literary Club',
    org: 'Jawaharlal Nehru University',
    detail: 'Contributed to organising literary and academic events.',
  },
];

const StyledSection = styled.section`
  max-width: 1000px;

  .card-list {
    display: grid;
    grid-gap: 20px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .card-list.two-col {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .card {
    ${({ theme }) => theme.mixins.boxShadow};
    padding: 1.75rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);

    @media (max-width: 480px) {
      padding: 1.25rem;
    }
  }

  .card-overline {
    margin: 0 0 8px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  h3 {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    line-height: 1.35;
  }

  .card-text {
    color: var(--light-slate);
    font-size: var(--fz-md);
    line-height: 1.6;
  }

  .meta {
    color: var(--slate);
    font-size: var(--fz-md);
  }

  .card-link {
    ${({ theme }) => theme.mixins.inlineLink};
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 15px 0 0;
    list-style: none;

    li {
      margin: 0 18px 5px 0;
      color: var(--slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
    }
  }
`;

const Section = ({ id, heading, children }) => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledSection id={id} ref={revealContainer}>
      <h2 className="numbered-heading">{heading}</h2>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export const Research = () => (
  <Section id="research" heading="Research Projects">
    <ul className="card-list">
      {research.map(({ title, tags, text }, i) => (
        <li className="card" key={i}>
          <h3>{title}</h3>
          <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} />
          <ul className="tags">
            {tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </Section>
);

export const Publications = () => (
  <Section id="publications" heading="Publications">
    <ul className="card-list">
      {publications.map(({ type, title, authors, url, venue }, i) => (
        <li className="card" key={i}>
          <p className="card-overline">{type}</p>
          <h3>{title}</h3>
          <p className="meta">
            {authors.split(', ').map((a, j, arr) => (
              <React.Fragment key={a}>
                {a === 'Manish Chandra' ? <strong>{a}</strong> : a}
                {j < arr.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </p>
          <a className="card-link" href={url} target="_blank" rel="noopener noreferrer">
            View on {venue} ↗
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export const Certifications = () => (
  <Section id="certifications" heading="Certifications & Awards">
    <ul className="card-list two-col">
      {certifications.map(({ title, detail }, i) => (
        <li className="card" key={i}>
          <h3>{title}</h3>
          <p className="meta">{detail}</p>
        </li>
      ))}
    </ul>
  </Section>
);

export const Activities = () => (
  <Section id="activities" heading="Extracurricular Activities">
    <ul className="card-list two-col">
      {activities.map(({ title, org, detail }, i) => (
        <li className="card" key={i}>
          <p className="card-overline">{org}</p>
          <h3>{title}</h3>
          <p className="meta">{detail}</p>
        </li>
      ))}
    </ul>
  </Section>
);
