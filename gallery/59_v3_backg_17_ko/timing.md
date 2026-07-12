# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "보진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 카비 쿠시 카비 gham에 나오는 크리쉬는 누구야? | S2 … 지브란 칸은 그 영화 말고 다른 작품에도 나왔어? | S3 그렇구나. 그럼 그 영화는 언제 개봉했어? | S4 아니, 괜찮아. 그냥 생각나는 대로 물어본 거야.

     0.00s  user  발화 시작: 카비 쿠시 카비 gham에 나오는 크리쉬는 누구야?
     3.20s  <ret> 발화 (turn1 첫 프레임)
     3.36s  agent 발화 시작: <ret> 영화 카비 쿠시 카비 gham에서 크리쉬 역할을 맡은 배우는 지브란 칸입니다.
     3.36s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.27s]: Jibraan Khan played the role of Krish in the 2001 Bollywood film Kabhi
     3.36s  user  발화 끝
     8.63s  user  발화 시작: 음, 그 영화 진짜 좋아했어.
     8.63s  agent 발화 끝
    11.03s  agent 발화 시작: 즐겁게 보셨다니 다행이네요. 혹시 다른 영화에 대해서도 궁금한 점이 있으신가요?
    11.03s  user  발화 끝
    15.82s  user  발화 시작: 그치.
    15.82s  agent 발화 끝
    16.30s  user  발화 시작: 아, 잠깐만.
    16.30s  user  발화 끝
    17.26s  agent 발화 시작: 그 영화는 샤룩 칸과 카졸이 출연해서—
    17.26s  user  발화 끝
    20.13s  user  발화 시작: … 지브란 칸은 그 영화 말고 다른 작품에도 나왔어?
    20.13s  agent 발화 끝
    24.05s  <ret> 발화 (turn8 첫 프레임)
    24.45s  agent 발화 시작: <ret> 네, 지브란 칸은 이천사년 영화 '허니문 트래블스 프라이빗 리미티드'와 이천육년 영화 '델리 하이
    24.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: Jibraan Khan also appeared in the 2004 film "Honeymoon Travels Pvt. Lt
    24.45s  user  발화 끝
    31.16s  user  발화 시작: 응.
    31.16s  agent 발화 끝
    31.64s  agent 발화 시작: 그는 아역 배우로 활동을 시작했고, 꾸준히 연기 활동을 이어오고 있습니다. 혹시 그의 최근 활동에 대해 알아
    31.64s  user  발화 끝
    39.79s  user  발화 시작: 어.
    39.79s  agent 발화 끝
    40.27s  user  발화 시작: 최근 활동은 말고, 그 영화에서 크리쉬 역할 말고 다른 역할도 맡았었어?
    40.27s  user  발화 끝
    45.22s  <ret> 발화 (turn13 첫 프레임)
    45.54s  agent 발화 시작: <ret> 카비 쿠시 카비 gham에서는 어린 크리쉬 라이찬드 역을 맡았습니다. 다른 역할을 맡지는 않았습니
    45.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.23s]: Jibraan Khan portrayed the young Krish Raichand in Kabhi Khushi Kabhie
    45.54s  user  발화 끝
    51.77s  user  발화 시작: 음.
    51.77s  agent 발화 끝
    52.25s  user  발화 시작: 그렇구나. 그럼 그 영화는 언제 개봉했어?
    52.25s  user  발화 끝
    54.81s  <ret> 발화 (turn16 첫 프레임)
    55.13s  agent 발화 시작: <ret> 카비 쿠시 카비 gham은 이천일년 십이월 십사일에 개봉했습니다.
    55.13s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.84s]: Kabhi Khushi Kabhie Gham was released on December 14, 2001.
    55.13s  user  발화 끝
    58.96s  user  발화 시작: 이천일년이구나. 시간이 정말 빠르다.
    58.96s  agent 발화 끝
    60.88s  agent 발화 시작: 시간이 참 빠르게 흐르는 것 같아요. 혹시 다른 영화에 대해 알아볼까요?
    60.88s  user  발화 끝
    66.16s  user  발화 시작: 아니, 괜찮아. 그냥 생각나는 대로 물어본 거야.
    66.16s  agent 발화 끝
    69.51s  agent 발화 시작: 네, 편하게 말씀해주세요. 언제든지 도와드릴 준비가 되어 있습니다.
    69.51s  user  발화 끝
    73.35s  user  발화 시작: 응.
    73.35s  agent 발화 끝
    73.83s  user  발화 시작: 고마워, 브랠.
    73.83s  user  발화 끝
    74.78s  agent 발화 시작: 천만에요.
    74.78s  user  발화 끝
    75.26s  agent 발화 끝
