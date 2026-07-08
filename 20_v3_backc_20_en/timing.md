# v3_backc_20_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who plays Miss Wilma in *I Can Do Bad All By Myself*?
     3.04s  <ret> 발화 (turn1 첫 프레임)
     3.63s  agent 발화 시작: <ret> That’s a great question. Gladys Knight portrayed Miss 
     3.70s  user  발화 끝
     4.04s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.42s]: Gladys Knight played Miss Wilma in Tyler Perry’s 2007 film, *I Can Do 
    12.06s  user  발화 시작: Oh, okay. I didn’t realize it was her.
    12.16s  agent 발화 끝
    14.56s  user  발화 끝
    14.79s  agent 발화 시작: She brought a wonderful energy to the role, a kind of soulfu
    18.72s  <ret> 발화 (turn4 첫 프레임)
    19.32s  agent 발화 시작: <ret> Gladys Knight is an American singer, songwriter, actre
    19.33s  agent 발화 끝
    19.72s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.98s]: Gladys Knight is an American singer, songwriter, actress, and humanita
    22.73s  user  발화 시작: Mm-hmm.
    23.36s  user  발화 끝
    25.30s  agent 발화 끝
    25.41s  agent 발화 시작: Quite a multi-faceted talent.
    27.53s  agent 발화 끝
    29.00s  user  발화 시작: What else has she been in?
    29.92s  <ret> 발화 (turn8 첫 프레임)
    30.47s  user  발화 끝
    30.51s  agent 발화 시작: <ret> She's had quite a career. She appeared as herself in *
    30.88s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.89s]: Knight appeared in the 1992 film *Beverly Hills Cop III* as herself.
    38.85s  agent 발화 끝
    38.85s  user  발화 시작: Interesting. Is she still performing?
    40.54s  <ret> 발화 (turn10 첫 프레임)
    41.13s  agent 발화 시작: <ret> Absolutely, she still graces the stage.
    41.30s  user  발화 끝
    41.54s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.91s]: Gladys Knight headlined a Las Vegas residency at the Palace Station Ho
    44.04s  agent 발화 끝
    44.26s  agent 발화 시작: She headlined a residency at the Palace Station in Las Vegas
    53.03s  agent 발화 끝
