# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What mode of government does the anarchists hate?
     2.85s  <ret> 발화 (turn1 첫 프레임)
     3.00s  agent 발화 시작: <ret> That’s an interesting question, exploring political id
     3.15s  user  발화 끝
     4.21s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.56s]: (no information found)
    10.32s  agent 발화 끝
    10.52s  user  발화 시작: Okay. Well, what’s the average human brain weight?
    13.89s  <ret> 발화 (turn3 첫 프레임)
    14.04s  agent 발화 시작: <ret> That’s a very common inquiry, and easily answered. The
    14.12s  user  발화 끝
    15.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.98s]: The average adult human brain weighs around 3 pounds (1.3 to 1.4 kilog
    22.42s  user  발화 시작: Wow, that’s… surprisingly light, actually.
    22.61s  agent 발화 끝
    25.33s  agent 발화 시작: It is, isn’t it? Such complexity packed into a relatively sm
    25.51s  user  발화 끝
    29.59s  agent 발화 끝
    30.03s  user  발화 시작: Is there a correlation between brain weight and intelligence
    33.29s  <ret> 발화 (turn7 첫 프레임)
    33.44s  agent 발화 시작: <ret> That’s a question we’ve studied extensively, of course
    33.63s  user  발화 끝
    34.65s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.29s]: While brain size correlates weakly with intelligence, it's not a defin
    42.49s  agent 발화 끝
    42.90s  user  발화 시작: So, it’s not just about how *much* brain, but *how* it’s wir
    47.55s  agent 발화 시작: Precisely! The connections, the pathways—those are where the
    47.67s  user  발화 끝
    51.12s  user  발화 시작: Uh-huh.
    51.61s  user  발화 끝
    53.23s  agent 발화 시작: Think of it like a computer—processing power isn't solely ab
    53.38s  agent 발화 끝
    58.23s  user  발화 시작: What about memory loss in Alzheimer's? Is that just… wiring 
    58.32s  agent 발화 끝
    62.91s  <ret> 발화 (turn13 첫 프레임)
    63.14s  agent 발화 시작: <ret> That’s a very astute observation, actually.
    63.17s  user  발화 끝
    64.11s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.96s]: Alzheimer's disease is characterized by the progressive loss of neuron
    66.10s  agent 발화 끝
    66.19s  agent 발화 시작: Alzheimer’s involves the loss of neurons and synapses, causi
    70.86s  agent 발화 끝
    71.28s  user  발화 시작: So, the brain physically shrinks?
    73.72s  user  발화 끝
    73.95s  agent 발화 시작: Yes, unfortunately. It’s a devastating process.
    77.94s  user  발화 시작: Are there any preventative measures people can take?
    78.02s  agent 발화 끝
    80.76s  agent 발화 시작: Staying mentally and physically active is often recommended.
    80.95s  user  발화 끝
    84.88s  user  발화 시작: That makes sense. Thank you, Dr. Sato.
    84.92s  agent 발화 끝
    87.65s  user  발화 끝
