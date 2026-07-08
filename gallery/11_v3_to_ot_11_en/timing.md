# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you know who won rookie of the year for UAAP season seven
     5.00s  <ret> 발화 (turn1 첫 프레임)
     5.59s  agent 발화 시작: <ret> That’s a lovely question— a bit of sports history! Jel
     5.74s  user  발화 끝
     7.72s  ⚡SPAN 주입 [d'=2.72s / d_lead=4.11s]: Jelly Buan was awarded the UAAP Season 71 Women’s Volleyball Rookie of
    14.62s  user  발화 시작: Oh, really? And what position did she play?
    14.72s  agent 발화 끝
    17.99s  user  발화 끝
    18.01s  agent 발화 시작: She was an outside hitter, known for her powerful spikes and
    22.53s  user  발화 시작: Was she also named best scorer that season?
    23.28s  agent 발화 끝
    25.49s  user  발화 끝
    25.54s  agent 발화 시작: That’s an excellent follow-up question; let me check—
    28.66s  <ret> 발화 (turn6 첫 프레임)
    29.24s  agent 발화 끝
    29.25s  agent 발화 시작: <ret> Indeed, Jelly Buan was awarded both Rookie of the Year
    31.38s  ⚡SPAN 주입 [d'=2.72s / d_lead=6.26s]: Jelly Buan was named both Rookie of the Year and Best Scorer in UAAP S
    33.32s  user  발화 시작: Mm-hmm.
    33.95s  user  발화 끝
    35.32s  agent 발화 시작: It was quite a debut season for her, a very impressive perfo
    35.51s  agent 발화 끝
    41.11s  agent 발화 끝
