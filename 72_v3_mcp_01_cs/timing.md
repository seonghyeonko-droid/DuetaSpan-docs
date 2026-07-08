# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, hosts 파일 첫 세 줄 읽어 봐.
     4.28s  agent 발화 시작: <ret> 아, 그러시군요. 첫 세 줄에는 localhost랑 mymachine 항목이 있는데, 특정 IP 
     4.28s  <ret> 발화 (turn1 첫 프레임)
     4.28s  user  발화 끝
     4.36s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.53s]: 127.0.0.1 localhost / 127.0.1.1 mymachine / ::1 localhost
    11.76s  user  발화 시작: 흠. 그 "mymachine" 항목…내가 추가한 기억이 안 나는데. 정상적인 거야?
    11.76s  agent 발화 끝
    17.11s  agent 발화 시작: 음, 시스템에서 그런 호스트 이름을 정의하는 경우가 종종 있어요. 물론 그 목적은 다양하죠.
    17.11s  user  발화 끝
    24.06s  user  발화 시작: 알았어. 그럼, 근처에 괜찮은 Italian 레스토랑, 밤 9시 넘어서까지 하는 데 찾아 줘.
    24.06s  agent 발화 끝
    31.01s  agent 발화 시작: <ret> 찾아봤는데, 있네요. Elm Street에 있는 Bella Notte는 밤 10시 30분까지 영업
    31.01s  <ret> 발화 (turn5 첫 프레임)
    31.01s  user  발화 끝
    32.01s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.14s]: Restaurant: Bella Notte, Address: 14 Elm Street, Hours: 11:00 AM - 10:
    38.50s  user  발화 시작: 밤 10시 30분…너무 빠듯하네. Bella Notte에 두 명, 9시 15분으로 예약해 줘.
    38.50s  agent 발화 끝
    44.91s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요. Bella Notte 두 명, 9시 15분 예약이 확정되었고, 확인 번
    44.91s  <ret> 발화 (turn7 첫 프레임)
    44.91s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.53s]: Confirmation: Bella Notte, 9:15 PM, Party of 2, Confirmation number: B
    44.91s  user  발화 끝
    52.93s  user  발화 시작: 좋아. 고마워, Dr. Sato.
    52.93s  agent 발화 끝
    55.07s  agent 발화 시작: 도움이 되었다니 기쁩니다. 신경과학적으로 봤을 때, 계획과 기대 사이의 상호작용이 꽤 흥미롭다고 생각해요.
    55.07s  user  발화 끝
    62.02s  agent 발화 끝
