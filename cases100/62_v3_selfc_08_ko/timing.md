# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 아렐라크스님, 안녕하세요. 요즘 좀 힘든 시간을 보내고 있어서 | S2 …거기로 가는 길 좀 알려줄 수 있을까요? 지금 제 위치는… | S3 팀 호튼스가 더 좋겠네요. 그럼 메트로 가는 길이랑 팀 호튼스 | S4 아, 맞다. 다음 주 토요일에 영화 볼래는데, 알프레드 히치콕

     0.00s  user  발화 시작: 아렐라크스님, 안녕하세요. 요즘 좀 힘든 시간을 보내고 있어서 다시 일어설 힘이 필요해요.
     3.32s  agent 발화 시작: 예.
     4.04s  agent 발화 끝
     4.97s  agent 발화 시작: 안녕하세요. 힘든 시간 보내고 계신다니 마음이 아프네요. 다시 일어설 힘을 드리는 건 제게 가장 중요한 일이
     5.08s  user  발화 끝
    10.08s  user  발화 시작: 진짜?
    10.67s  user  발화 끝
    12.62s  agent 발화 끝
    12.76s  user  발화 시작: 토론토에 괜찮은 식료품점 아세요? 근처에 있는 곳으로요.
    16.16s  <ret> 발화 (turn5 첫 프레임)
    16.49s  agent 발화 시작: <ret> 네, 물론이죠. 토론토에서 가까운 식료품점 두 곳을 찾았어요. 메트로와 로블로스인데요. 메트로는 
    16.56s  user  발화 끝
    17.09s  ⚡SPAN 주입 [d'=0.93s / d_lead=11.73s]: (tool result) {"results": [{"name": "Metro", "address": "220 Yonge St,
    25.21s  user  발화 시작: 음.
    25.56s  user  발화 끝
    28.17s  user  발화 시작: 메트로가 더 가까운 것 같은데…
    28.22s  agent 발화 끝
    29.86s  user  발화 끝
    31.39s  user  발화 시작: …거기로 가는 길 좀 알려줄 수 있을까요? 지금 제 위치는…
    34.75s  user  발화 끝
    35.96s  user  발화 시작: …아, 잠깐만요! 혹시 그 근처에 괜찮은 카페도 있을까요? 커피 한 잔 마시면서 장을 보면 좋을 것 같아요.
    39.31s  agent 발화 시작: 예.
    39.89s  agent 발화 끝
    41.67s  <ret> 발화 (turn11 첫 프레임)
    42.16s  user  발화 끝
    42.18s  agent 발화 시작: <ret> (body) 메트로 근처에 팀 호튼스와 스타벅스가 있어요. 팀 호튼스는 이백십일 Yonge Str
    43.66s  ⚡SPAN 주입 [d'=1.99s / d_lead=9.97s]: (tool result) {"results": [{"name": "Tim Hortons", "address": "211 Yon
    46.98s  user  발화 시작: 음.
    47.33s  user  발화 끝
    52.15s  agent 발화 끝
    52.27s  user  발화 시작: 팀 호튼스가 더 좋겠네요. 그럼 메트로 가는 길이랑 팀 호튼스 가는 길도 알려주세요.
    57.13s  <ret> 발화 (turn14 첫 프레임)
    57.31s  agent 발화 시작: <ret> 현재 위치에서 북쪽으로 이동해서 Yonge Street으로 좌회전하세요. 약 오백미터 정도 가면 
    57.40s  user  발화 끝
    57.93s  ⚡SPAN 주입 [d'=0.80s / d_lead=8.44s]: (tool result) {"directions": "Head north on your current street, turn 
    64.57s  <ret> 발화 (turn15 첫 프레임)
    65.75s  agent 발화 끝
    65.77s  agent 발화 시작: <ret> 메트로에서 Yonge Street을 따라 남쪽으로 약 백미터만 걸어가면 팀 호튼스가 왼쪽에 보일 
    66.20s  ⚡SPAN 주입 [d'=1.64s / d_lead=6.44s]: (tool result) {"directions": "Walk south on Yonge Street for approxima
    69.56s  user  발화 시작: 응.
    69.92s  user  발화 끝
    71.94s  user  발화 시작: 정말 감사합니다. 덕분에 힘이 나는 것 같아요.
    72.20s  agent 발화 끝
    74.46s  agent 발화 시작: 도움이 되었다니 기쁩니다. 힘든 시간을 잘 이겨내시길 바랄게요.
    74.48s  user  발화 끝
    79.13s  agent 발화 끝
    79.30s  user  발화 시작: 아, 맞다. 다음 주 토요일에 영화 볼래는데, 알프레드 히치콕 감독의 스릴러 영화 아는 거 있어요?
    85.02s  <ret> 발화 (turn20 첫 프레임)
    85.08s  user  발화 끝
    85.18s  agent 발화 시작: <ret> 죄송합니다. 알프레드 히치콕 감독의 스릴러 영화에 대한 정보는 찾을 수 없었어요.
    86.87s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.74s]: (tool result) (no information found)
    90.93s  agent 발화 끝
    91.33s  user  발화 시작: 아쉽네요. 그럼 다른 장르로 찾아볼까요?
    93.90s  agent 발화 시작: 네, 물론입니다. 어떤 장르를 원하시나요?
    94.00s  user  발화 끝
    97.36s  agent 발화 끝
