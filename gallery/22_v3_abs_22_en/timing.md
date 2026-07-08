# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What mode of government does the anarchists hate?
     2.55s  <ret> 발화 (turn1 첫 프레임)
     2.69s  agent 발화 시작: <ret> That’s a fascinating question, delving into political 
     2.86s  user  발화 끝
     4.47s  ⚡SPAN 주입 [d'=1.92s / d_lead=2.95s]: (no information found)
    10.81s  agent 발화 끝
    10.90s  user  발화 시작: Okay. What about the hippocampus? What does it do?
    14.03s  <ret> 발화 (turn3 첫 프레임)
    14.25s  agent 발화 시작: <ret> Ah, the hippocampus—a region I find endlessly intrigui
    14.37s  user  발화 끝
    14.99s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.35s]: The hippocampus is essential for forming new long-term memories and is
    23.84s  user  발화 시작: Spatial navigation? Like, finding your way around?
    23.89s  agent 발화 끝
    27.23s  agent 발화 시작: Precisely! It creates cognitive maps of environments.
    27.39s  user  발화 끝
    30.92s  agent 발화 끝
    31.34s  user  발화 시작: Is that why people with Alzheimer’s get lost?
    34.11s  user  발화 시작: …because their hippocampus is damaged?
    34.26s  user  발화 끝
    35.85s  <ret> 발화 (turn8 첫 프레임)
    36.16s  agent 발화 시작: <ret> That’s a very insightful connection you’ve made.
    36.19s  user  발화 끝
    36.97s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.73s]: Alzheimer’s disease causes progressive damage to the hippocampus, lead
    38.88s  agent 발화 끝
    38.91s  agent 발화 시작: Alzheimer’s damages the hippocampus, resulting in memory los
    44.23s  agent 발화 끝
    44.25s  user  발화 시작: Mm-hmm. So, a healthy hippocampus equals a good memory?
    47.92s  agent 발화 시작: Generally, yes, though memory is complex—many areas contribu
    47.99s  user  발화 끝
    53.06s  agent 발화 끝
    53.10s  user  발화 시작: What other areas are important for memory?
    55.36s  <ret> 발화 (turn13 첫 프레임)
    55.59s  agent 발화 시작: <ret> Several brain regions work in concert to create memori
    55.63s  user  발화 끝
    56.48s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.27s]: The amygdala processes emotional memories, while the prefrontal cortex
    65.55s  agent 발화 끝
    66.64s  user  발화 시작: Emotional memories? Like, really strong ones?
    69.55s  agent 발화 시작: Exactly—the ones that tend to stick with us, for better or w
    69.69s  user  발화 끝
    73.81s  agent 발화 끝
    74.24s  user  발화 시작: [happy] That makes sense. So, if I want to remember somethin
    78.67s  user  발화 끝
    78.99s  agent 발화 시작: It can certainly help strengthen the memory trace, yes.
    82.68s  user  발화 시작: Huh. That's… a trick I’ll keep in mind. Thanks, Doctor Sato.
    82.79s  agent 발화 끝
    86.97s  user  발화 끝
