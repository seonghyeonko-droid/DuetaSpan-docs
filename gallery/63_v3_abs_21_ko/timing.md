# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "주영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-10",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-09-10",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 빅토리아 여왕과 앨버트 공이 참석했던 작은 무도회는 어디에서  | S2 예를 들어, 가장 유명한 무도회 같은 거요. | S3 그쪽 근처에 괜찮은 호텔이 있을까요? | S4 … 빈 근처에 더 조용한 마을은 없을까요?

     0.00s  user  발화 시작: 빅토리아 여왕과 앨버트 공이 참석했던 작은 무도회는 어디에서 열렸을까요?
     3.72s  <ret> 발화 (turn1 첫 프레임)
     3.96s  agent 발화 시작: <ret> 아쉽게도 그 무도회가 어디에서 열렸는지에 대한 정보는 찾을 수 없었습니다.
     3.96s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.40s]: (no information found)
     3.96s  user  발화 끝
     8.36s  user  발화 시작: 네네.
     8.36s  agent 발화 끝
     8.80s  user  발화 시작: 음… 혹시 다른 무도회에 대한 정보는 찾을 수 있을까요?
     8.80s  user  발화 끝
    12.76s  agent 발화 시작: 어떤 종류의 무도회에 대해 알아보고 싶으신가요?
    12.76s  user  발화 끝
    15.40s  user  발화 시작: 그렇죠.
    15.40s  agent 발화 끝
    15.84s  user  발화 시작: 예를 들어, 가장 유명한 무도회 같은 거요.
    15.84s  user  발화 끝
    18.60s  <ret> 발화 (turn7 첫 프레임)
    18.92s  agent 발화 시작: <ret> 세계에서 가장 유명하고 권위 있는 무도회 중 하나는 매년 오스트리아 빈의 국립 오페라 하우스에서 
    18.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.36s]: The Vienna Opera Ball is widely regarded as one of the most famous and
    18.92s  user  발화 끝
    27.29s  user  발화 시작: 오, 빈 오페라 볼이군요. 정말 멋지네요.
    27.29s  agent 발화 끝
    29.93s  agent 발화 시작: 맞아요. 정말 화려하고 웅장한 행사라고 들었어요.
    29.93s  user  발화 끝
    32.57s  user  발화 시작: 그쪽 근처에 괜찮은 호텔이 있을까요?
    32.57s  agent 발화 끝
    34.53s  <ret> 발화 (turn11 첫 프레임)
    34.77s  agent 발화 시작: <ret> 빈에는 호텔 자허 빈이 있는데, 필하모니커 거리 사번지에 위치하고 있으며, 일박에 사백오십유로이고
    34.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: (tool result) {"hotel name": "Hotel Sacher Wien", "address": "Philharm
    34.77s  user  발화 끝
    41.81s  user  발화 시작: 음.
    41.81s  agent 발화 끝
    42.25s  user  발화 시작: 사백오십유로는 좀 비싸네요. 좀 더 저렴한 곳은 없을까요? —
    42.25s  user  발화 끝
    46.21s  user  발화 시작: … 빈 근처에 더 조용한 마을은 없을까요?
    46.21s  user  발화 끝
    48.97s  <ret> 발화 (turn15 첫 프레임)
    49.29s  agent 발화 시작: <ret> 그뤼네발트는 빈 십구구에 있는 와인 재배 마을로, 전통 와인 선술집인 호이리거로 유명합니다.
    49.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.28s]: Grinzing is a wine-growing village in the 19th district of Vienna, kno
    49.29s  user  발화 끝
    54.57s  user  발화 시작: 호이리거가 뭔가요?
    54.57s  agent 발화 끝
    55.45s  agent 발화 시작: 호이리거는 집에서 만든 와인을 맛볼 수 있는 전통적인 와인 선술집이에요. 현지인들이 자주 찾는 곳이죠.
    55.45s  user  발화 끝
    61.61s  user  발화 시작: 네.
    61.61s  agent 발화 끝
    62.05s  agent 발화 시작: 그곳에서 와인을 마시며 여유로운 시간을 보내실 수 있을 거예요. 저는 재정 관리를 도와드릴 수 있는데, 혹시
    62.05s  user  발화 끝
    71.73s  agent 발화 끝
