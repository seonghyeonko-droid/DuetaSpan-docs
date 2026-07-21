# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "우국",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "commute",
#       "text": "User walks 20 minutes to the office."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "emergency",
#       "text": "User's emergency contact is Tobias."
#     },
#     {
#       "date": "2026-05-08",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-05-05",
#       "category": "pet",
#       "text": "User has a Ragdoll cat named Miso."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "work",
#       "text": "User works as a paramedic."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-09",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     },
#     {
#       "date": "2026-04-21",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-04-13",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-03-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 극장 공연 선정은 누가 하는 걸까요? | S2 아, 그렇군요. 그럼 연출가는 뭐 하는 사람이에요? | S3 음, 배우는 누가 고르는 거죠? | S4 아하, 그렇군요. 감사합니다.

     0.00s  user  발화 시작: 혹시 극장 공연 선정은 누가 하는 걸까요?
     2.64s  <ret> 발화 (turn1 첫 프레임)
     2.74s  agent 발화 시작: <ret> 공연 선정은 보통 극장 감독님이 담당하시죠. 극장 감독님이 어떤 공연을 올릴지 결정하는 분이세요.
     2.88s  user  발화 끝
     3.82s  ⚡SPAN 주입 [d'=1.18s / d_lead=6.39s]: The theatre director is responsible for choosing shows for the theatre
     5.53s  user  발화 시작: 네.
     5.98s  user  발화 끝
     9.13s  agent 발화 끝
    10.85s  user  발화 시작: 아, 그렇군요. 그럼 연출가는 뭐 하는 사람이에요?
    13.53s  <ret> 발화 (turn4 첫 프레임)
    13.60s  agent 발화 시작: <ret> 연출가님은 무대 연출의 창의적이고 기술적인 부분을 총괄하시는 분이에요. 무대 연출가님은 배우들의 
    13.71s  user  발화 끝
    14.57s  ⚡SPAN 주입 [d'=1.05s / d_lead=9.08s]: A stage director oversees the creative and technical aspects of a thea
    17.77s  user  발화 시작: 그렇죠.
    18.21s  user  발화 끝
    22.68s  agent 발화 끝
    22.68s  user  발화 시작: 음, 배우는 누가 고르는 거죠?
    24.36s  <ret> 발화 (turn7 첫 프레임)
    24.74s  agent 발화 시작: <ret> 배우 섭외는 캐스팅 디렉터가 담당하세요. 캐스팅 디렉터는 공연에 맞는 배우를 선택하는 역할을 하시
    24.84s  user  발화 끝
    25.17s  ⚡SPAN 주입 [d'=0.81s / d_lead=6.67s]: The casting director is responsible for selecting actors for a theatre
    31.41s  agent 발화 끝
    31.54s  user  발화 시작: 아하, 그렇군요. 감사합니다.
    33.33s  user  발화 끝
    33.63s  agent 발화 시작: 천만에요.
    34.59s  agent 발화 끝
