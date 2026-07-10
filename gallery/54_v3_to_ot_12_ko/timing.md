# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "태안",
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
#       "date": "2026-05-24",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-04-07",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-09-22",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Mariah Carey의 'We Belong Together' | S2 오, 그래? | S3 존타 오스틴은 다른 유명한 노래도 썼어? | S4 — 잠깐만, 그 사람이 어셔의 'You Make Me Wann

     0.00s  user  발화 시작: Mariah Carey의 'We Belong Together'는 누가 썼어?
     2.79s  <ret> 발화 (turn1 첫 프레임)
     3.11s  agent 발화 시작: <ret> 'We Belong Together'는 머라이어 캐리와 함께 존타 오스틴, 섀넌 홈즈가 공동으로 
     3.11s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.19s]: Johntá Austin co-wrote Mariah Carey’s “We Belong Together” with Carey 
     3.23s  user  발화 끝
     5.98s  user  발화 시작: 음.
     6.48s  user  발화 끝
     8.29s  agent 발화 끝
     9.48s  user  발화 시작: 오, 그래?
    10.63s  user  발화 끝
    10.99s  agent 발화 시작: 음악을 통해 감정을 표현하는 건 정말 멋진 일이죠. 스트레스 해소에 도움이 될 수 있습니다.
    14.31s  user  발화 시작: 그치.
    15.13s  user  발화 끝
    16.04s  agent 발화 끝
    16.11s  user  발화 시작: 존타 오스틴은 다른 유명한 노래도 썼어?
    18.90s  <ret> 발화 (turn7 첫 프레임)
    19.14s  agent 발화 시작: <ret> 존타 오스틴은 얼라이어, 어셔, 메리 제이 블라이지와 같은 아티스트들을 위해 곡을 쓰고 프로듀싱했
    19.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: Johntá Austin has written and produced songs for artists such as Aaliy
    19.30s  user  발화 끝
    21.22s  user  발화 시작: 음.
    21.71s  user  발화 끝
    25.07s  agent 발화 끝
    25.09s  agent 발화 시작: 다양한 아티스트와 협업하며 폭넓은 음악적 경험을 쌓았다고 볼 수 있겠네요.
    27.17s  user  발화 시작: 어.
    27.52s  user  발화 끝
    29.35s  user  발화 시작: — 잠깐만, 그 사람이 어셔의 'You Make Me Wanna...'도 썼어?
    29.39s  agent 발화 끝
    33.45s  <ret> 발화 (turn12 첫 프레임)
    33.53s  agent 발화 시작: <ret> 네, 어셔의 히트곡 'You Make Me Wanna...'도 어셔 레이먼드 사세, 브라이언 마이
    33.53s  ⚡SPAN 주입 [d'=1.68s / d_lead=6.90s]: Johntá Austin co-wrote Usher’s hit song “You Make Me Wanna…” with Ushe
    33.60s  user  발화 끝
    40.44s  agent 발화 끝
