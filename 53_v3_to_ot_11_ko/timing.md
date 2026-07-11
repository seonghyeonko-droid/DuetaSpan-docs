# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "시담",
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
#       "date": "2026-05-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-25",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그 노래… “Show Me the Way to Amarillo | S2 혹시… 그분이 한국 노래도 작사했나요? | S3 “Hound Dog”요? 엘비스 프레슬리도 불렀잖아요? — | S4 그쵸. 라리스 씨는 노래 좋아하세요?

     0.00s  user  발화 시작: 그 노래… “Show Me the Way to Amarillo” 부른 사람 누구였죠?
     3.37s  <ret> 발화 (turn1 첫 프레임)
     3.52s  user  발화 끝
     3.61s  agent 발화 시작: <ret> “Show Me the Way to Amarillo”는 하워드 그린필드 씨가 찰스 스트라우스 씨와
     3.61s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.70s]: Howard Greenfield co-wrote the song "Show Me the Way to Amarillo" with
     5.89s  user  발화 시작: 네.
     6.39s  user  발화 끝
     9.30s  agent 발화 끝
     9.80s  user  발화 시작: 아, 그렇군요. 그분 다른 노래도 아세요?
    12.47s  user  발화 끝
    12.66s  agent 발화 시작: 하워드 그린필드 씨는 정말 많은 곡을 작사하셨어요.
    14.40s  user  발화 시작: 맞아요.
    15.04s  user  발화 끝
    16.36s  agent 발화 끝
    16.67s  user  발화 시작: 혹시… 그분이 한국 노래도 작사했나요?
    18.98s  <ret> 발화 (turn7 첫 프레임)
    19.30s  agent 발화 시작: <ret> 죄송하지만, 하워드 그린필드 씨가 한국 노래를 작사했다는 정보는 찾을 수 없었어요.
    19.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.61s]: (no information found)
    19.35s  user  발화 끝
    24.91s  agent 발화 끝
    25.15s  user  발화 시작: 아… 그렇군요. 그럼, 그분이 작사한 노래 중에 제일 유명한 건 뭐예요?
    29.62s  <ret> 발화 (turn9 첫 프레임)
    29.93s  agent 발화 시작: <ret> 하워드 그린필드 씨가 작사한 노래 중 가장 유명한 건 천구백오십이년에 빅 마마 손튼 씨가 처음 녹
    29.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: Howard Greenfield's most famous song is "Hound Dog," originally record
    30.14s  user  발화 끝
    33.99s  user  발화 시작: 그렇죠.
    34.63s  user  발화 끝
    37.72s  agent 발화 끝
    37.84s  user  발화 시작: “Hound Dog”요? 엘비스 프레슬리도 불렀잖아요? —
    41.25s  user  발화 시작: …그 노래 엘비스 프레슬리는 언제 불렀어요?
    41.31s  user  발화 끝
    43.70s  <ret> 발화 (turn13 첫 프레임)
    43.78s  agent 발화 시작: <ret> 엘비스 프레슬리 씨는 천구백오십육년에 “Hound Dog”를 녹음하셨고, 그 노래는 엘비스 씨의 
    43.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.56s]: Elvis Presley recorded "Hound Dog" in 1956, and it became one of his s
    43.89s  user  발화 끝
    46.59s  user  발화 시작: 정말요?
    47.32s  user  발화 끝
    51.33s  agent 발화 끝
    51.48s  agent 발화 시작: 두 분 모두 훌륭한 가수를 통해 많은 사랑을 받은 노래인 것 같아요.
    55.27s  agent 발화 끝
    55.34s  user  발화 시작: 그쵸. 라리스 씨는 노래 좋아하세요?
    57.92s  user  발화 끝
    58.01s  agent 발화 시작: 저는 사람들의 마음을 움직이는 노래를 듣는 걸 좋아해요. 음악은 위로가 되기도 하니까요.
    63.58s  agent 발화 끝
    63.74s  user  발화 시작: 맞아요. 저도 그래요. 힘든 일이 있을 때 노래를 들으면 마음이 편안해져요.
    68.04s  agent 발화 시작: 힘들 때 음악에 기대는 건 정말 좋은 방법인 것 같아요. 마음을 다스리는 데 도움이 될 수 있거든요.
    68.19s  user  발화 끝
    74.34s  agent 발화 끝
