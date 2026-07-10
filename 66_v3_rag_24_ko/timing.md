# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "연서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-08-21",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 살만 칸 영화 중에 '툼코 나 불 파예게' 노래 아세요? | S2 아, 맞다. 수슈미타 센이 나왔었지. 근데 그 영화 노래 중에 | S3 네, 좋아요. 혹시 그 영화 다른 노래들도 추천해 줄 수 있어 | S4 맞아요. 요즘 스트레스가 많아서 좀 힘들었는데, 좋은 노래 들

     0.00s  user  발화 시작: 살만 칸 영화 중에 '툼코 나 불 파예게' 노래 아세요?
     3.48s  agent 발화 시작: 어떤 노래를 찾으시는 건지 조금 더 자세히 말씀해 주시겠어요?
     3.60s  user  발화 끝
     7.09s  agent 발화 끝
     8.61s  user  발화 시작: 그 영화에 나오는 노래들 있잖아요, 기억나세요?
    11.25s  <ret> 발화 (turn3 첫 프레임)
    11.65s  agent 발화 시작: <ret> 이천이년에 리나 야다브 감독이 연출한 인도의 로맨틱 드라마 영화가 '툼코 나 불 파예게'였는데, 
    11.65s  ⚡SPAN 주입 [d'=0.50s / d_lead=10.81s]: Tumko Na Bhool Paayenge was a 2002 Indian romantic drama film directed
    11.85s  user  발화 끝
    21.98s  user  발화 시작: 아, 맞다. 수슈미타 센이 나왔었지. 근데 그 영화 노래 중에 제일 유명한 노래가 뭔데요?
    22.46s  agent 발화 끝
    26.77s  <ret> 발화 (turn5 첫 프레임)
    27.00s  agent 발화 시작: <ret> 이천이년 영화 '툼코 나 불 파예게'에서 가장 인기 있는 노래는 알카 야그닉과 우디트 나라얀이 부
    27.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: "Kahin Pyaar Na Hojaye" is a popular song from the 2002 film Tumko Na 
    27.11s  user  발화 끝
    32.16s  user  발화 시작: 와.
    32.88s  user  발화 끝
    35.01s  user  발화 시작: 그 노래 진짜 좋았는데… 지금 몇 시예요?
    35.12s  agent 발화 끝
    37.35s  <ret> 발화 (turn8 첫 프레임)
    37.74s  agent 발화 시작: <ret> 지금은 서울 시간으로 이천이십육년 칠월 십일 금요일 오후 두시 사십칠분입니다.
    37.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: (tool result) It is Friday, July 10, 2026 at 2:47 PM in Asia/Seoul rig
    37.87s  user  발화 끝
    43.12s  agent 발화 시작: 시간 확인해 드렸으니, 영화 노래 이야기로 다시 돌아갈까요?
    43.34s  agent 발화 끝
    45.37s  user  발화 시작: 음.
    45.77s  user  발화 끝
    46.42s  user  발화 시작: 네, 좋아요. 혹시 그 영화 다른 노래들도 추천해 줄 수 있어요?
    46.50s  agent 발화 끝
    51.13s  <ret> 발화 (turn12 첫 프레임)
    51.28s  agent 발화 시작: <ret> '툼코 나 불 파예게'에는 "무제 툼세 모하바트 하이", "딜 네 예 카하 하이 딜 세", "예 
    51.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: Tumko Na Bhool Paayenge features songs like "Mujhe Tumse Mohabbat Hai"
    51.51s  user  발화 끝
    61.25s  agent 발화 끝
    61.50s  user  발화 시작: 오, '딜 네 예 카하 하이 딜 세'도 좋았네요!
    66.25s  agent 발화 시작: 좋은 노래를 알고 계시는군요. 영화 음악 감상은 기분 전환에도 도움이 될 수 있어요.
    66.36s  user  발화 끝
    71.07s  agent 발화 끝
    71.62s  user  발화 시작: 맞아요. 요즘 스트레스가 많아서 좀 힘들었는데, 좋은 노래 들으니까 기분이 나아지네요.
    78.44s  agent 발화 시작: 스트레스 관리는 건강한 삶의 중요한 부분이에요. 혹시 예산 관리에 대해서도 이야기 나눠볼까요?
    78.56s  user  발화 끝
    84.55s  agent 발화 끝
