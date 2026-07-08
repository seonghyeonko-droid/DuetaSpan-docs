# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you know who won rookie of the year for UAAP season seven
     5.20s  <ret> 발화 (turn1 첫 프레임)
     5.59s  agent 발화 시작: <ret> That’s a lovely question— a bit of sports history! Jel
     5.74s  user  발화 끝
     7.04s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.11s]: Jelly Buan was awarded the UAAP Season 71 Women’s Volleyball Rookie of
    14.62s  user  발화 시작: Oh, really? And what position did she play?
    14.72s  agent 발화 끝
    17.99s  user  발화 끝
    18.01s  agent 발화 시작: She was an outside hitter, known for her powerful spikes and
    22.53s  user  발화 시작: Was she also named best scorer that season?
    23.28s  agent 발화 끝
    25.49s  user  발화 끝
    25.54s  agent 발화 시작: That’s an excellent follow-up question; let me check—
    28.83s  <ret> 발화 (turn6 첫 프레임)
    29.14s  agent 발화 시작: <ret> Indeed, Jelly Buan was awarded both Rookie of the Year
    29.24s  agent 발화 끝
    30.19s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.26s]: Jelly Buan was named both Rookie of the Year and Best Scorer in UAAP S
    33.20s  user  발화 시작: Mm-hmm.
    33.84s  user  발화 끝
    35.29s  agent 발화 시작: It was quite a debut season for her, a very impressive perfo
    35.40s  agent 발화 끝
    41.08s  agent 발화 끝
