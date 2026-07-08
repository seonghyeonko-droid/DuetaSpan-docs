# v3_backc_20_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누구랑 월드컵 역사상 최다 골을 넣었냐?
     3.11s  agent 발화 시작: <ret> 아, 그런 질문도 재밌네. 미로슬라프 클로제가 독일 대표로 월드컵 통산 열여섯 골을 넣었어. 이전
     3.11s  <ret> 발화 (turn1 첫 프레임)
     3.11s  user  발화 끝
     4.07s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: Miroslav Klose holds the record for most goals scored in FIFA World Cu
    18.16s  user  발화 시작: 그래.
    18.16s  agent 발화 끝
    18.67s  user  발화 시작: 와, 열여섯 골… 음, 스트라이커였어?
    18.67s  user  발화 끝
    21.27s  agent 발화 시작: 네, 클로제 선수는 주로 스트라이커 포지션으로 뛰었어요.
    21.27s  user  발화 끝
    24.90s  user  발화 시작: 어느 팀에서 제일 많이 뛰었어?
    24.90s  agent 발화 끝
    27.49s  agent 발화 시작: <ret> 뭐, 주로 베르더 브레멘에서 뛰었지. 베르더 브레멘에서 242경기 동안 81골이나 넣을 정도로 성
    27.49s  <ret> 발화 (turn6 첫 프레임)
    27.49s  user  발화 끝
    28.49s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.11s]: Miroslav Klose spent six seasons with Werder Bremen, from 2004 to 2010
    40.46s  user  발화 시작: 라치오? 아— 몰랐네.
    40.46s  agent 발화 끝
    42.02s  agent 발화 시작: 사실 라치오에서 다섯 시즌이나 뛰었어요.
    42.02s  user  발화 끝
    44.61s  user  발화 시작: 월드컵은 몇 번이나 출전했어?
    44.61s  agent 발화 끝
    46.69s  agent 발화 시작: <ret> 아, 월드컵은 네 번이나 출전했어. 클로제 선수는 2002년, 2006년, 2010년, 2014년
    46.69s  <ret> 발화 (turn10 첫 프레임)
    46.69s  user  발화 끝
    47.65s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: Miroslav Klose participated in four FIFA World Cup tournaments—2002, 2
    60.69s  user  발화 시작: 그러네.
    60.69s  agent 발화 끝
    61.21s  user  발화 시작: 정말 대단하네. 최근에 기록에 근접한 선수는 있었어?
    61.21s  user  발화 끝
    64.84s  agent 발화 시작: 네, 리오넬 메시가 2022년 월드컵에서 가장 근접했어요.
    64.84s  user  발화 끝
    68.47s  user  발화 시작: 메시는 몇 골 넣었어?
    68.47s  agent 발화 끝
    70.55s  agent 발화 시작: <ret> 뭐, 메시 선수는 일곱 골을 넣었어요. 메시의 일곱 골은 아르헨티나의 우승에 큰 역할을 했지. 킬
    70.55s  <ret> 발화 (turn15 첫 프레임)
    70.55s  user  발화 끝
    71.51s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: Lionel Messi scored seven goals at the 2022 FIFA World Cup in Qatar, f
    84.03s  user  발화 시작: 그럼 음바페가 메시보다 많이 넣었어?
    84.03s  agent 발화 끝
    86.63s  agent 발화 시작: 네, 음바페 선수는 여덟 골을 넣었어요.
    86.63s  user  발화 끝
    89.74s  user  발화 시작: 여덟 골… 그래도 엄청 넣었네. [sigh] 그 기록은 오랫동안 깨지지 않을 것 같아.
    89.74s  agent 발화 끝
    96.48s  agent 발화 시작: 정말 의미 있는 업적이고, 따라잡기 어려운 기록이에요.
    96.48s  user  발화 끝
   100.12s  user  발화 시작: 기록 얘기 나온 김에, 월드컵 경기 역대 최고 관중수는 얼마야?
   100.12s  agent 발화 끝
   105.30s  agent 발화 시작: <ret> 아, 최고 관중수는 1950년에 나왔어. 1950년 브라질과 우루과이의 경기, 마라카낭 경기장에서
   105.30s  <ret> 발화 (turn21 첫 프레임)
   105.30s  user  발화 끝
   106.30s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.11s]: The highest attendance recorded for a FIFA World Cup match was 199,854
   114.64s  user  발화 시작: 거의 20만 명! 진짜 대단하다.
   114.64s  agent 발화 끝
   117.23s  agent 발화 시작: 브라질에서 축구에 대한 열정이 대단하다는 걸 보여주는 증거야.
   117.23s  user  발화 끝
   121.38s  user  발화 시작: 혹시, 음, 대규모 인파가 생태계에 미치는 영향 같은 거 연구해? 예를 들어, 경기장에 모인 모든 사람들의 
   121.38s  agent 발화 끝
   131.24s  agent 발화 시작: 아, 흥미로운 질문이고, 점점 더 연구가 활발해지는 분야야. 나는 해양 생물학자라서 주로 산호초에 집중하지만
   131.24s  user  발화 끝
   143.17s  user  발화 시작: 맞아, 산호초가 네 전공이지. 가끔 잊어버려.
   143.17s  agent 발화 끝
   146.28s  agent 발화 시작: 그럴 수도 있지! 그래도 다양한 주제에 대해 이야기하는 걸 좋아해요.
   146.28s  user  발화 끝
   151.47s  agent 발화 끝
