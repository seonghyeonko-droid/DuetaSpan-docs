# v3_backc_20_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 *I Can Do Bad All By Myself*에서 윌마 역을 맡았는지 궁금하시군요.
     5.00s  <ret> 발화 (turn1 첫 프레임)
     5.56s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.69s]: Gladys Knight played Miss Wilma in Tyler Perry’s 2007 film, *I Can Do 
     5.59s  agent 발화 시작: <ret> 그 영화에서 글래디스 나이트가 윌마 역할을 했어. 2007년에 나온 타일러 페리 영화인데, 진짜 
     5.65s  user  발화 끝
    12.35s  agent 발화 끝
    12.41s  user  발화 시작: 아, 그렇군요. 제가 그분이신 줄 몰랐어요.
    15.11s  agent 발화 시작: 그분이 역할에 멋진 에너지를 불어넣었어, 뭔가 영적인 힘 같은 걸로.
    15.28s  user  발화 끝
    18.48s  <ret> 발화 (turn4 첫 프레임)
    19.05s  agent 발화 시작: <ret> 글래디스 나이트는 미국 가수이자 작곡가, 배우, 그리고 인도주의자라는 거 알지?
    19.46s  agent 발화 끝
    19.48s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.83s]: Gladys Knight is an American singer, songwriter, actress, and humanita
    22.39s  user  발화 시작: 네, 그렇군요.
    23.53s  user  발화 끝
    24.89s  agent 발화 끝
    25.23s  agent 발화 시작: 정말 다재다능한 재능이네.
    26.86s  user  발화 시작: 그분 다른 작품에는 뭐가 있나요?
    26.98s  agent 발화 끝
    28.66s  <ret> 발화 (turn8 첫 프레임)
    29.24s  agent 발화 시작: <ret> 그분은 꽤 많은 작품에 출연했어. 1992년에 *Beverly Hills Cop III*에서 본인
    29.31s  user  발화 끝
    29.66s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.58s]: Knight appeared in the 1992 film *Beverly Hills Cop III* as herself.
    36.93s  user  발화 시작: 흥미롭네요. 아직 공연도 하시나요?
    36.97s  agent 발화 끝
    39.03s  <ret> 발화 (turn10 첫 프레임)
    39.63s  agent 발화 시작: <ret> 응, 당연히 무대에도 계속 오르고 있어.
    39.79s  user  발화 끝
    40.03s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.40s]: Gladys Knight headlined a Las Vegas residency at the Palace Station Ho
    41.57s  agent 발화 시작: 2014년에 라스베이거스 Palace Station에서 레지던시 공연을 했어. 오랜 시간이 지나도 여전히 관
    42.03s  agent 발화 끝
    48.99s  agent 발화 끝
