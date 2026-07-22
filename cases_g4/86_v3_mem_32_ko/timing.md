# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "다호",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     },
#     {
#       "date": "2026-06-07",
#       "category": "trip",
#       "text": "User is planning a trip to Norway in February."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "employer",
#       "text": "User works at the city hospital."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "emergency",
#       "text": "User's emergency contact is Minjun."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "dislike",
#       "text": "User can't stand natto."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     },
#     {
#       "date": "2026-01-09",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2025-12-17",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 갠. 제가 예전에 노트북 고를 때 예산을 얼마로  | S2 그래서 상담을 좀 받아볼까 하는데, 제가 전에 어떤 조건을 원 | S3 오, 좋네요! 그럼 바로 예약할 수 있을까요? | S4 감사합니다. 이제 마음이 좀 놓이네요.

     0.00s  agent 발화 시작: [happy] 안녕하세요, 다호 님! 저는 갠이라고 해요. 만나서 정말 반가워요.
     6.39s  agent 발화 끝
     6.62s  user  발화 시작: 안녕하세요, 갠. 제가 예전에 노트북 고를 때 예산을 얼마로 잡았었는지 기억하시나요?
    11.37s  <ret> 발화 (turn2 첫 프레임)
    11.95s  agent 발화 시작: <ret> 예산은 백팔십만 원 정도로 생각하고 계셨어요.
    12.08s  ⚡SPAN 주입 [d'=0.71s / d_lead=4.02s]: [2026-01-09] Past chat — Choosing a laptop: budget around 1.8M won; ne
    12.08s  user  발화 끝
    15.97s  agent 발화 끝
    17.45s  user  발화 시작: 아, 맞아요. 그 정도면 충분하겠죠? 근데 요즘 일이 너무 많아서 스트레스가 심하네요.
    24.45s  user  발화 끝
    24.58s  agent 발화 시작: [sigh] 고생이 많으시네요. 일과 삶의 균형을 찾는 게 정말 쉽지 않죠. 잠시 숨을 돌릴 시간이 필요해 
    30.85s  user  발화 시작: 맞아요.
    31.67s  user  발화 끝
    34.98s  user  발화 시작: 그래서 상담을 좀 받아볼까 하는데, 제가 전에 어떤 조건을 원했었죠?
    35.00s  agent 발화 끝
    36.69s  agent 발화 시작: 네.
    37.32s  agent 발화 끝
    39.65s  <ret> 발화 (turn8 첫 프레임)
    39.65s  agent 발화 시작: <ret> 네, 그때 적어둔 메모가 있어요. 저녁 시간대에 화상 세션이 가능하고, 인지 행동 치료를 하시는 
    39.70s  user  발화 끝
    40.55s  ⚡SPAN 주입 [d'=0.90s / d_lead=3.27s]: [2026-06-24] Past chat — Looking for a therapist: prefers evening vide
    50.13s  agent 발화 끝
    50.42s  user  발화 시작: 맞아요. 혹시 지금 부산 근처에서 그런 상담사를 찾을 수 있을까요?
    51.70s  agent 발화 시작: 예.
    52.30s  agent 발화 끝
    54.41s  <ret> 발화 (turn11 첫 프레임)
    54.76s  agent 발화 시작: <ret> [happy] 마침 부산에 인지 행동 치료 전문가인 김 박사님이 계시네요. 저녁 화상 상담도 가능
    54.92s  user  발화 끝
    55.32s  ⚡SPAN 주입 [d'=0.91s / d_lead=11.18s]: (tool result) Dr. Kim, CBT specialist, offers evening video sessions. 
    65.93s  agent 발화 끝
    66.62s  user  발화 시작: 오, 좋네요! 그럼 바로 예약할 수 있을까요?
    70.44s  agent 발화 시작: [curious] 네, 가능해요. 혹시 원하시는 날짜와 시간이 따로 있으신가요?
    70.55s  user  발화 끝
    76.59s  user  발화 시작: 아, 그냥 다음 주 월요일 저녁 여덟시로 해주세요.
    76.79s  agent 발화 끝
    79.57s  <ret> 발화 (turn15 첫 프레임)
    79.92s  user  발화 끝
    79.96s  agent 발화 시작: <ret> 예약 완료되었습니다. 칠월 이십일 저녁 여덟시에 김 박사님과 상담 일정이 잡혔어요.
    81.16s  ⚡SPAN 주입 [d'=1.59s / d_lead=8.01s]: (tool result) Appointment confirmed with Dr. Kim for July 20, 2026, at
    86.01s  user  발화 시작: 네네.
    86.69s  user  발화 끝
    87.97s  agent 발화 끝
    89.25s  user  발화 시작: 감사합니다. 이제 마음이 좀 놓이네요.
    92.20s  user  발화 끝
    92.36s  agent 발화 시작: [happy] 다행이에요. 상담 받으시면서 마음의 짐을 조금이라도 덜어내셨으면 좋겠습니다.
    99.32s  agent 발화 끝
