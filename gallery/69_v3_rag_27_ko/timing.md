# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "민국",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 영화 '미 비포 유'에서 샘 클라플린이 맡은 역할이 뭔지 궁금 | S2 아, 그렇구나. 혹시 그 영화 감독은 누구야? | S3 에밀리아 클라크는 또 어떤 영화에 나왔었지? — | S4 …아, 잠깐만, 그 영화가 워낙 슬픈 걸로 유명하잖아. 혹시 

     0.00s  user  발화 시작: 영화 '미 비포 유'에서 샘 클라플린이 맡은 역할이 뭔지 궁금해.
     4.56s  <ret> 발화 (turn1 첫 프레임)
     4.64s  agent 발화 시작: <ret> 이천십육년에 개봉한 로맨틱 드라마 '미 비포 유'에서 샘 클라플린은 윌 트레이너 역할을 맡았답니다
     4.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.04s]: In the 2016 romantic drama "Me Before You" directed by Thea Sharrock, 
     4.64s  user  발화 끝
    10.68s  user  발화 시작: 아, 그렇구나. 혹시 그 영화 감독은 누구야?
    10.68s  agent 발화 끝
    13.77s  <ret> 발화 (turn3 첫 프레임)
    13.93s  agent 발화 시작: <ret> '미 비포 유'의 감독은 티아 샤록이었어요. 에밀리아 클라크도 출연했죠.
    13.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.18s]: Thea Sharrock directed the 2016 romantic drama "Me Before You", which 
    13.93s  user  발화 끝
    18.11s  user  발화 시작: 에밀리아 클라크는 또 어떤 영화에 나왔었지? —
    18.11s  agent 발화 끝
    21.36s  user  발화 시작: …아, 잠깐만, 그 영화가 워낙 슬픈 걸로 유명하잖아. 혹시 그거 보면서 얼마나 울었어?
    21.36s  user  발화 끝
    27.39s  agent 발화 시작: 저는 감정을 느끼지는 못하지만, 많은 분들이 그 영화를 보면서 눈물을 흘리셨다고 들었어요.
    27.39s  user  발화 끝
    32.97s  user  발화 시작: 응응.
    32.97s  agent 발화 끝
    33.43s  agent 발화 시작: 슬픈 영화는 감정을 정화하는 데 도움이 될 수 있죠. 마음이 복잡할 때, 슬픈 영화를 보면서 위로를 받는 분
    33.43s  user  발화 끝
    42.25s  agent 발화 끝
