# v3_abs_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What is cultural relativism guided by?
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.87s  agent 발화 시작: <ret> That’s a fascinating question, and one that’s debated 
     4.03s  user  발화 끝
     4.28s  ⚡SPAN 주입 [d'=1.00s / d_lead=6.81s]: (no information found)
    10.68s  agent 발화 끝
    11.10s  agent 발화 시작: Unfortunately, I don’t have a definitive answer to what spec
    14.48s  user  발화 시작: Oh. Well, what’s the highest mountain in the world?
    14.61s  agent 발화 끝
    24.35s  <ret> 발화 (turn4 첫 프레임)
    24.75s  ⚡SPAN 주입 [d'=0.40s / d_lead=1.11s]: Mount Everest, located in the Mahalangur Himal sub-range of the Himala
    24.94s  agent 발화 시작: <ret> Let me share that with you. Mount Everest is the highe
    25.10s  user  발화 끝
    29.19s  agent 발화 끝
    29.94s  user  발화 시작: Wow. Is it in Nepal?
    36.12s  <ret> 발화 (turn6 첫 프레임)
    36.52s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.71s]: Mount Everest is located on the border between Nepal and the Tibet Aut
    36.72s  agent 발화 시작: <ret> It is, actually. Mount Everest sits on the border of N
    36.90s  user  발화 끝
    40.28s  agent 발화 끝
    40.46s  user  발화 시작: Interesting. What about wildflowers there—are any alpine flo
    42.89s  <ret> 발화 (turn8 첫 프레임)
    43.49s  agent 발화 시작: <ret> That’s a wonderful thought—high-altitude flora are a p
    43.65s  user  발화 끝
    43.89s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.05s]: Several species of flowering plants grow above the snow line on Mount 
    46.48s  agent 발화 시작: Himalayan blue poppies are among the flowering plants found 
    46.54s  agent 발화 끝
    55.19s  agent 발화 끝
    55.85s  user  발화 시작: That’s amazing!
    61.32s  user  발화 끝
