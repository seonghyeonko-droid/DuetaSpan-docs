# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "도슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-11-12",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-09-05",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-19",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-07-10",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 세상에서 가장 아름다운 소녀일 수 있을까, 그 노래 부른 사람이 누구였죠?
     4.96s  <ret> 발화 (turn1 첫 프레임)
     5.11s  agent 발화 시작: <ret> 세상에서 가장 아름다운 소녀일 수 있을까, 그 노래는 프린스라는 분이 부르셨어요. 정말 다양한 분
     5.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.02s]: Prince was an American singer, songwriter, musician, and actor who was
     5.32s  user  발화 끝
    15.08s  user  발화 시작: 프린스요? 아, 맞아요, 그분 노래 좋아했어요.
    15.12s  agent 발화 끝
    17.61s  <ret> 발화 (turn3 첫 프레임)
    17.67s  user  발화 끝
    17.77s  agent 발화 시작: <ret> 네, 프린스님은 천구백칠십팔년에 데뷔 앨범을 내셨고, 천구백팔십이년 앨범 '천구백구십구'와 천구백
    17.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.34s]: Prince released his debut album, For You, in 1978, achieving mainstrea
    20.98s  user  발화 시작: 그렇군요.
    21.66s  user  발화 끝
    28.05s  agent 발화 시작: 프린스님은 음악뿐만 아니라 영화, 연기 등 다방면에서 활약하셨는데—
    28.11s  agent 발화 끝
    32.16s  user  발화 시작: …그 '퍼플 레인' 영화, 혹시 지금 볼 수 있는 곳이 있을까요?
    32.95s  agent 발화 끝
    36.87s  user  발화 끝
    37.00s  <ret> 발화 (turn7 첫 프레임)
    37.40s  agent 발화 시작: <ret> '퍼플 레인' 영화는 아마존 프라임 비디오, 애플 티비, 유튜브에서 대여하거나 구매해서 보실 수 
    37.40s  ⚡SPAN 주입 [d'=1.12s / d_lead=9.41s]: (tool result) Searching for where to watch Purple Rain... Available on
    46.52s  <ret> 발화 (turn8 첫 프레임)
    46.67s  agent 발화 시작: <ret> 좋은 하루 보내세요.
    46.68s  ⚡SPAN 주입(IRRELEVANT) [d'=1.28s / d_lead=1.47s]: The current weather in Seoul, South Korea is 26.5°C, humidity 68%, win
    46.80s  agent 발화 끝
    48.13s  agent 발화 끝
