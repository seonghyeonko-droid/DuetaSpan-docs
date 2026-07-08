# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, hosts 파일 첫 세 줄 읽어 봐.
     3.96s  agent 발화 시작: <ret> 아, 그러시군요. 첫 세 줄에는 localhost랑 mymachine 항목이 있는데, 특정 IP 
     3.96s  <ret> 발화 (turn1 첫 프레임)
     3.96s  user  발화 끝
     4.28s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.49s]: 127.0.0.1 localhost / 127.0.1.1 mymachine / ::1 localhost
    10.89s  user  발화 시작: 흐음. 그 "mymachine" 항목… 내가 추가한 기억이 안 나는데. 정상적인 거야?
    10.89s  agent 발화 끝
    16.33s  agent 발화 시작: 뭐, 시스템에서 그런 호스트 이름을 정의하는 경우가 종종 있어요. 물론 그 목적은 다양하죠.
    16.33s  user  발화 끝
    22.76s  user  발화 시작: 알았어. 그럼, 근처에 괜찮은 이탈리아 식당 찾아줘, 밤 9시 넘어서까지 하는 곳으로.
    22.76s  agent 발화 끝
    28.70s  agent 발화 시작: <ret> 찾아봤는데, 있네요. Elm Street에 있는 Bella Notte는 밤 10시 반까지 영업하고
    28.70s  <ret> 발화 (turn5 첫 프레임)
    28.70s  user  발화 끝
    29.70s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.98s]: Restaurant: Bella Notte, Address: 14 Elm Street, Hours: 11:00 AM - 10:
    36.13s  user  발화 시작: 밤 10시 반… 너무 아슬아슬하네. Bella Notte에 두 명 자리를 9시 15분에 예약해 줘.
    36.13s  agent 발화 끝
    43.05s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요. Bella Notte 두 명 자리, 9시 15분으로 예약 완료됐습니다.
    43.05s  <ret> 발화 (turn7 첫 프레임)
    43.05s  user  발화 끝
    43.21s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.49s]: Confirmation: Bella Notte, 9:15 PM, Party of 2, Confirmation number: B
    50.97s  user  발화 시작: 좋아. 고마워, 사토 박사.
    50.97s  agent 발화 끝
    52.95s  agent 발화 시작: 도움이 됐다니 다행이네요. 계획하고 기대하는 과정이 신경학적으로 꽤 흥미롭다고 생각해요.
    52.95s  user  발화 끝
    57.90s  agent 발화 끝
