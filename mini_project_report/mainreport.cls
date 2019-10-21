\ProvidesClass{mainreport}[]
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{report}}
\ProcessOptions
\LoadClass[12pt,oneside]{report}


% set linespacing
\linespread{1.25}

% The list of packages needed for creating an advanced report class.
\RequirePackage{graphicx}
\RequirePackage{fancyhdr}
\RequirePackage{amsmath}
\RequirePackage{geometry}
\RequirePackage{setspace}
\RequirePackage{fmtcount}

% disable page numbers from appearing before contents
\pagenumbering{gobble}

% Macro for List of Symbols
\def\listofsymbols{\input{symbols} \clearpage}
\def\addsymbol #1: #2#3{$#1$ \> \parbox{5in}{#2 \dotfill \pageref{#3}}\\}
\def\newsymbol#1{\label{#1}} 

% the footer stuff
\newcommand{\changefont}{\fontsize{12}{12}\selectfont}
\fancypagestyle{plain}{
\fancyfoot[C]{\thepage \changefont}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}
}

% for setting up alternative directory paths to graphics files,
% remember to comment in "graphics" package
%
\graphicspath{{./eps/}{./tiff/}{./jpg/}{./fig/}{./dia/}{./gnuplot/}{./png/}}

\renewcommand{\headrulewidth}{0.5pt}
\renewcommand{\footrulewidth}{0.5pt}
\fancyhfoffset{10pt}
%------------
\usepackage{geometry}
\geometry{verbose,a4paper,tmargin=25mm,bmargin=25mm,lmargin=35mm,rmargin=25mm}

% To generate list of abbreviations
\usepackage{nomencl}
\makenomenclature

% set section size
\usepackage{sectsty}
\sectionfont{\fontsize{12}{15}\selectfont}
\subsectionfont{\fontsize{12}{15}\selectfont}
\subsubsectionfont{\fontsize{12}{15}\selectfont}

% set spacing between chapter title and text
\usepackage{titlesec}
\titleformat{\chapter}[display]
{\normalfont\huge\bfseries\centering}{\chaptertitlename\ \thechapter}{14pt}{\Huge}
\titlespacing*{\chapter}{14pt}{14pt}{14pt}
\setcounter{secnumdepth}{3}
\setcounter{tocdepth}{2}
% setup of titlepage
\def\maketitle{%
\begin{titlepage}
\thispagestyle{empty}
\vspace*{0.7cm}
{\centering     

\Large
{\rm\bf SOULTION TO CUSTOMER LOYALITY PROBLEM}\\ 

\vspace{2cm}
\normalsize {A PROJECT REPORT}\\

\vspace{0.5cm}
submitted by \\
\vspace{.5cm}
\rm
{\large \bf {VYSHAK PUTHUSSERI}}\\
{\normalsize \bf {TVE17MCA054}}\\

\vspace{0.3cm}
{\bf{to}} \\

\vspace{0.3cm}
\normalsize{the APJ Abdul Kalam Technological University}\\
\normalsize{in partial fullfilment of the requirements for the award of the degree}\\

\vspace{0.3cm}
{\bf{of}} \\

\vspace{0.3cm}
\normalsize{Master of Computer Applications}\\

\vspace{0.5cm}
\begin{figure}[ht] 
{\centering {\includegraphics[scale=.5]{2.jpg}}\par}
\end{figure}

\vspace{0.3cm}
{\normalsize \textbf {Department of Computer Applications}\\ 
College of Engineering Trivandrum\\
Trivandrum-695016}\\

\vspace{0.3cm}
\normalsize {OCTOBER 2019} \\
}    

\pagebreak
\end{titlepage}
}
