# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 인도 독립에 대해 읽다가 궁금한 점이 생겼어요. 로마와 파리에 자유 인도 센터를 세운 사람이 누구였는지 알 
     6.76s  <ret> 발화 (turn1 첫 프레임)
     7.35s  agent 발화 시작: <ret> 정말 흥미로운 질문이시네요. 중요한 시기에 대한 이야기를 나누게 되었어요. 수바스 찬드라 보스가 
     7.55s  user  발화 끝
     8.20s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.41s]: Subhas Chandra Bose founded the Free India Centre in Rome in 1941 and 
    20.57s  agent 발화 끝
    20.92s  user  발화 시작: 아, 일구사십일년과 사십이년이군요… 그럼 그는 이미 추축국과 협력하고 있던 중에 그런 일을 한 건가요?
    27.70s  agent 발화 시작: 네, 맞아요. 정치적으로 매우 복잡하고 논란이 많았던 시기였습니다.
    27.78s  user  발화 끝
    31.44s  agent 발화 끝
    32.33s  user  발화 시작: 그런데… 그 센터들의 목적이 정확히 뭐였나요? 그러니까, 그곳에서 뭘 한 거죠?
    37.37s  <ret> 발화 (turn5 첫 프레임)
    37.97s  agent 발화 시작: <ret> 좋은 질문이세요. 그 기능에 대해 이해하면 중요성을 알 수 있을 거예요. 자유 인도 센터는 인도 
    37.98s  user  발화 끝
    39.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.52s]: The Free India Centres served as information bureaus and recruitment c
    48.08s  agent 발화 끝
    48.12s  user  발화 시작: 인도 국가군… 맞아요, 일본의 지원으로 그가 만든 군대요? 그럼 로마와 파리는 주요 모집 장소였던 건가요?
    55.57s  agent 발화 시작: 그 도시들은 많은 인도 교민들이 거주했기 때문에, 그 노력에 있어서 전략적인 위치였습니다. 파리의 재즈 클럽
    55.77s  user  발화 끝
    67.12s  agent 발화 끝
